# How to Update Video Links

## Finding PCB Design Videos on YouTube

### Recommended Channels:
1. **Altium Academy** - Professional PCB design
2. **Robert Feranec** - Advanced techniques
3. **Phil's Lab** - RF and high-speed design
4. **EEVblog** - Electronics engineering
5. **GreatScott!** - DIY projects
6. **Predictable Designs** - PCB design tips

## Steps to Update Videos:

### 1. Find a Relevant Video
- Search YouTube for PCB design topics
- Copy the video URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`)

### 2. Extract Video ID
- From URL: `youtube.com/watch?v=VIDEO_ID`
- The `VIDEO_ID` is what you need

### 3. Update HTML Files

**For video link:**
```html
<a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank">
```

**For thumbnail:**
```html
<img src="https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg" alt="Video">
```

### 4. Example Update

**Before:**
```html
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
<img src="https://via.placeholder.com/400x225">
```

**After:**
```html
<a href="https://www.youtube.com/watch?v=5q6lF7Xr7qY">
<img src="https://img.youtube.com/vi/5q6lF7Xr7qY/maxresdefault.jpg">
```

## Video Categories:

### Signal Integrity:
- Search: "PCB signal integrity tutorial"
- Search: "impedance control PCB"
- Search: "crosstalk prevention"

### Power & Grounding:
- Search: "PCB power distribution"
- Search: "ground plane design"
- Search: "decoupling capacitors"

### RF Design:
- Search: "RF PCB design"
- Search: "antenna PCB placement"
- Search: "RF routing techniques"

### Manufacturing:
- Search: "PCB manufacturing process"
- Search: "PCB assembly tutorial"
- Search: "PCB fabrication"

## Thumbnail Fallback:

If YouTube thumbnail doesn't load, add fallback:
```html
<img src="https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg" 
     alt="Video" 
     onerror="this.src='https://via.placeholder.com/400x225/1a1a2e/6366f1?text=PCB+Design'">
```

## Testing:

1. Open HTML file in browser
2. Click video links to verify they work
3. Check thumbnails load correctly
4. Test on different browsers

## Commit Changes:

```bash
git add pages/*.html index.html
git commit -m "Update: Added real YouTube video links for PCB tutorials"
git push origin main
```
