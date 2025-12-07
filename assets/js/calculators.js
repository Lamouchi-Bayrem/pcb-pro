// ============================================
// PCB Design Calculators
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const calculatorBtns = document.querySelectorAll('.btn-calculator');
    const calculatorModal = document.getElementById('calculator-modal');
    
    // Open calculator modal
    calculatorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const calcType = this.getAttribute('data-calc');
            openCalculator(calcType);
        });
    });
    
    // Close modal
    if (calculatorModal) {
        const closeBtn = calculatorModal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeCalculator);
        }
        
        calculatorModal.addEventListener('click', function(e) {
            if (e.target === calculatorModal) {
                closeCalculator();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && calculatorModal.classList.contains('active')) {
                closeCalculator();
            }
        });
    }
});

function openCalculator(type) {
    const modal = document.getElementById('calculator-modal');
    if (!modal) {
        createCalculatorModal();
    }
    
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = getCalculatorHTML(type);
    
    document.getElementById('calculator-modal').classList.add('active');
    
    // Initialize calculator
    initializeCalculator(type);
}

function closeCalculator() {
    const modal = document.getElementById('calculator-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function createCalculatorModal() {
    const modal = document.createElement('div');
    modal.id = 'calculator-modal';
    modal.className = 'calculator-modal';
    document.body.appendChild(modal);
}

function getCalculatorHTML(type) {
    const calculators = {
        'trace-width': {
            title: 'Trace Width Calculator',
            html: `
                <div class="modal-header">
                    <h3>Trace Width Calculator</h3>
                    <button class="modal-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="calculator-form">
                    <div class="form-group">
                        <label>Current (Amperes)</label>
                        <input type="number" id="current" step="0.1" placeholder="1.0" required>
                    </div>
                    <div class="form-group">
                        <label>Temperature Rise (°C)</label>
                        <input type="number" id="temp-rise" value="10" step="1" required>
                    </div>
                    <div class="form-group">
                        <label>Copper Thickness (oz)</label>
                        <select id="copper-thickness">
                            <option value="0.5">0.5 oz</option>
                            <option value="1" selected>1 oz</option>
                            <option value="2">2 oz</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Trace Length (mm)</label>
                        <input type="number" id="trace-length" step="0.1" placeholder="50">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="calculateTraceWidth()">
                        <i class="fas fa-calculator"></i> Calculate
                    </button>
                    <div class="calculator-result" id="trace-result">
                        <div class="result-value" id="trace-width-value"></div>
                        <div class="result-label">Minimum Trace Width</div>
                    </div>
                </div>
            `
        },
        'via-size': {
            title: 'Via Size Calculator',
            html: `
                <div class="modal-header">
                    <h3>Via Size Calculator</h3>
                    <button class="modal-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="calculator-form">
                    <div class="form-group">
                        <label>Via Current (Amperes)</label>
                        <input type="number" id="via-current" step="0.1" placeholder="1.0" required>
                    </div>
                    <div class="form-group">
                        <label>Board Thickness (mm)</label>
                        <input type="number" id="board-thickness" step="0.1" placeholder="1.6" required>
                    </div>
                    <div class="form-group">
                        <label>Via Plating Thickness (μm)</label>
                        <input type="number" id="plating-thickness" value="25" step="1">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="calculateViaSize()">
                        <i class="fas fa-calculator"></i> Calculate
                    </button>
                    <div class="calculator-result" id="via-result">
                        <div class="result-value" id="via-diameter-value"></div>
                        <div class="result-label">Minimum Via Diameter</div>
                    </div>
                </div>
            `
        },
        'impedance': {
            title: 'Impedance Calculator',
            html: `
                <div class="modal-header">
                    <h3>Impedance Calculator</h3>
                    <button class="modal-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="calculator-form">
                    <div class="form-group">
                        <label>Trace Type</label>
                        <select id="trace-type">
                            <option value="microstrip">Microstrip</option>
                            <option value="stripline">Stripline</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Trace Width (mm)</label>
                        <input type="number" id="trace-width-imp" step="0.01" placeholder="0.2" required>
                    </div>
                    <div class="form-group">
                        <label>Trace Thickness (mm)</label>
                        <input type="number" id="trace-thickness" step="0.01" value="0.035" required>
                    </div>
                    <div class="form-group">
                        <label>Dielectric Thickness (mm)</label>
                        <input type="number" id="dielectric-thickness" step="0.01" placeholder="0.1" required>
                    </div>
                    <div class="form-group">
                        <label>Dielectric Constant (εr)</label>
                        <input type="number" id="dielectric-constant" step="0.1" value="4.4" required>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="calculateImpedance()">
                        <i class="fas fa-calculator"></i> Calculate
                    </button>
                    <div class="calculator-result" id="impedance-result">
                        <div class="result-value" id="impedance-value"></div>
                        <div class="result-label">Characteristic Impedance (Ω)</div>
                    </div>
                </div>
            `
        },
        'power-dissipation': {
            title: 'Power Dissipation Calculator',
            html: `
                <div class="modal-header">
                    <h3>Power Dissipation Calculator</h3>
                    <button class="modal-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="calculator-form">
                    <div class="form-group">
                        <label>Voltage (V)</label>
                        <input type="number" id="voltage" step="0.1" placeholder="5.0" required>
                    </div>
                    <div class="form-group">
                        <label>Current (A)</label>
                        <input type="number" id="current-pwr" step="0.1" placeholder="1.0" required>
                    </div>
                    <div class="form-group">
                        <label>Ambient Temperature (°C)</label>
                        <input type="number" id="ambient-temp" value="25" step="1">
                    </div>
                    <div class="form-group">
                        <label>Thermal Resistance (°C/W)</label>
                        <input type="number" id="thermal-resistance" step="0.1" placeholder="50">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="calculatePowerDissipation()">
                        <i class="fas fa-calculator"></i> Calculate
                    </button>
                    <div class="calculator-result" id="power-result">
                        <div class="result-value" id="power-value"></div>
                        <div class="result-label">Power Dissipation (W)</div>
                        <div class="result-value" id="temp-rise-value" style="font-size: 1.5rem; margin-top: 1rem;"></div>
                        <div class="result-label">Temperature Rise (°C)</div>
                    </div>
                </div>
            `
        }
    };
    
    return calculators[type]?.html || '<p>Calculator not found</p>';
}

function initializeCalculator(type) {
    // Add event listeners for Enter key
    const inputs = document.querySelectorAll('.calculator-form input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const calcBtn = document.querySelector('.calculator-form .btn-primary');
                if (calcBtn) calcBtn.click();
            }
        });
    });
}

// Calculator Functions
function calculateTraceWidth() {
    const current = parseFloat(document.getElementById('current').value);
    const tempRise = parseFloat(document.getElementById('temp-rise').value);
    const copperThickness = parseFloat(document.getElementById('copper-thickness').value);
    
    if (!current || !tempRise) {
        alert('Please fill in all required fields');
        return;
    }
    
    // IPC-2221 formula for trace width
    // W = (I / (k * ΔT^0.44))^(1/0.725)
    // k depends on copper thickness: 0.024 for inner layers, 0.048 for outer layers
    const k = copperThickness === 0.5 ? 0.015 : copperThickness === 1 ? 0.024 : 0.048;
    const width = Math.pow(current / (k * Math.pow(tempRise, 0.44)), 1 / 0.725);
    
    const result = document.getElementById('trace-result');
    const valueEl = document.getElementById('trace-width-value');
    
    valueEl.textContent = `${PCBDesignPro.utils.round(width, 2)} mm`;
    result.classList.add('active');
}

function calculateViaSize() {
    const current = parseFloat(document.getElementById('via-current').value);
    const boardThickness = parseFloat(document.getElementById('board-thickness').value);
    const platingThickness = parseFloat(document.getElementById('plating-thickness').value) / 1000; // Convert to mm
    
    if (!current || !boardThickness) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Simplified via size calculation
    // Minimum via diameter based on current carrying capacity
    const diameter = Math.sqrt((current * 4) / (Math.PI * 35 * (boardThickness / platingThickness)));
    
    const result = document.getElementById('via-result');
    const valueEl = document.getElementById('via-diameter-value');
    
    valueEl.textContent = `${PCBDesignPro.utils.round(diameter, 2)} mm`;
    result.classList.add('active');
}

function calculateImpedance() {
    const traceType = document.getElementById('trace-type').value;
    const width = parseFloat(document.getElementById('trace-width-imp').value);
    const thickness = parseFloat(document.getElementById('trace-thickness').value);
    const dielectricThickness = parseFloat(document.getElementById('dielectric-thickness').value);
    const er = parseFloat(document.getElementById('dielectric-constant').value);
    
    if (!width || !thickness || !dielectricThickness || !er) {
        alert('Please fill in all required fields');
        return;
    }
    
    let impedance;
    
    if (traceType === 'microstrip') {
        // Microstrip impedance formula (simplified)
        const h = dielectricThickness;
        const w = width;
        const t = thickness;
        const weff = w + (t / Math.PI) * Math.log(1 + (2 * h) / t);
        impedance = (87 / Math.sqrt(er + 1.41)) * Math.log((5.98 * h) / (0.8 * weff + t));
    } else {
        // Stripline impedance formula (simplified)
        const b = dielectricThickness * 2;
        const w = width;
        const t = thickness;
        const weff = w - (0.35 - w / b) * t;
        impedance = (60 / Math.sqrt(er)) * Math.log((4 * b) / (0.67 * Math.PI * (0.8 * weff + t)));
    }
    
    const result = document.getElementById('impedance-result');
    const valueEl = document.getElementById('impedance-value');
    
    valueEl.textContent = `${PCBDesignPro.utils.round(impedance, 1)} Ω`;
    result.classList.add('active');
}

function calculatePowerDissipation() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current-pwr').value);
    const ambientTemp = parseFloat(document.getElementById('ambient-temp').value) || 25;
    const thermalResistance = parseFloat(document.getElementById('thermal-resistance').value) || 50;
    
    if (!voltage || !current) {
        alert('Please fill in all required fields');
        return;
    }
    
    const power = voltage * current;
    const tempRise = power * thermalResistance;
    const junctionTemp = ambientTemp + tempRise;
    
    const result = document.getElementById('power-result');
    const powerValue = document.getElementById('power-value');
    const tempValue = document.getElementById('temp-rise-value');
    
    powerValue.textContent = `${PCBDesignPro.utils.round(power, 2)} W`;
    tempValue.textContent = `${PCBDesignPro.utils.round(tempRise, 1)} °C`;
    result.classList.add('active');
}

// Make functions globally available
window.calculateTraceWidth = calculateTraceWidth;
window.calculateViaSize = calculateViaSize;
window.calculateImpedance = calculateImpedance;
window.calculatePowerDissipation = calculatePowerDissipation;
