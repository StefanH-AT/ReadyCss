# ReadyCSS

## Another framework?
Yes, because why not. 

### For whom? 
Many backend developers hate front end development because of confusing CSS frameworks with terrible customizability and unnecessary JavaScript. 

### Using modern CSS
A lot of popular CSS frameworks like Bootstrap or Foundation depend on old CSS features like flexbox and don't utilize modern stuff like CSS Grid, CSS variables and new SCSS features. I'm not shitting on Bootstrap, don't take me wrong. This frameworks is massively inspired by it. I just want play with all those new toys we have.

### Built for customization
Many frameworks are difficult to theme and often require you to edit the source SCSS just to change colors or thicken some borders. In contrast, ReadyCSS uses CSS custom properties for everything. This allows you to override styles from a central place.

```css
:root {
    --color-main: #439fd3;
    --font-family-normal: Arial sans-serif;
    --font-size: 1.4rem; /* Default font size. Scales everything else */
    --spacer: 0.5rem; /* Scales all spacings */
}
```

#### Scoped customization
Another incredible feature this allows is for allowing settings to be scoped to a specific container.
```css
.theme-high-contrast {
    --color-main: #ff3434;
    --color-accent: #c802ff;
    --scheme-background: black;
    --scheme-foreground: white;
    --scheme-shade: white;
    --font-size: 1.6rem;
}
```

```html
<!-- Everything inside uses these settings -->
<div class="theme-high-contrast">
    <h1>A heading</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <a class="btn btn-main" href="#">Link</a>
    <a class="btn btn-main btn-outline" href="#">Link 2</a>
</div>
```

## License
This project is licensed under the [MIT license](https://github.com/SpyceTewan/Entropy-Css/blob/master/LICENSE). Anybody is free to use and modify the code in any way for private or commercial projects. Go and have fun with it!
