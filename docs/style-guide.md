# EatoSystems Style Guide

## Color Palette

### Primary Colors

- **Eato Green** (#2F8F2F)
  - Used for all CTAs and primary actions
  - Primary buttons, key UI elements, and brand identity

### Accent Colors

- **Earthy Orange** (#D9822B)
  - Warm, energetic accent
  - Used for hover states, highlights, and key statistics
  
- **Deep Charcoal** (#2A2A2A)
  - Neutral, sophisticated accent
  - Used for text and links

### Usage Rules

#### Buttons
- Default state: Eato Green fill with white text
- Hover state: Earthy Orange fill with white text
- Outline buttons: Eato Green border and text, on hover fill with Eato Green

#### Links
- Default state: Deep Charcoal text
- Hover state: Eato Green text with underline

#### Highlights and Statistics
- Alternate between Eato Green and Earthy Orange for highlight bars or statistic numerals
- Use Earthy Orange for emphasis in text (italics)

## Typography

### Font Family
- Primary font: "Inter", sans-serif

### Type Scale

| Element | Size | Line Height | Weight | Usage |
|---------|------|-------------|--------|-------|
| H1 | 48px | 1.2 | 700 | Main page headings |
| H2 | 36px | 1.3 | 600 | Section headings |
| H3 | 28px | 1.4 | 600 | Subsection headings |
| H4 | 20px | 1.5 | 700 | Module titles, stronger than body |
| Body | 16px | 1.75 | 400 | Main content text |
| Small | 14px | 1.6 | 400 | Captions, footnotes |

### Typography Rules

- Increase line-height on all paragraphs and captions to at least 1.6× for optimal readability
- Use heavier font-weight (600–700) for all module and section headings
- Reserve italics or color (accent orange) for emphasis only

## CSS Classes

### Button Classes
\`\`\`css
.btn-primary {
  background-color: #2F8F2F;
  color: white;
}

.btn-primary:hover {
  background-color: #D9822B;
}
\`\`\`

### Link Classes
\`\`\`css
.link-default {
  color: #2A2A2A;
}

.link-default:hover {
  color: #2F8F2F;
  text-decoration: underline;
}
\`\`\`

### Highlight Classes
\`\`\`css
.highlight-green {
  background-color: #2F8F2F;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.highlight-orange {
  background-color: #D9822B;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
\`\`\`

### Statistic Classes
\`\`\`css
.stat-green {
  color: #2F8F2F;
  font-weight: bold;
}

.stat-orange {
  color: #D9822B;
  font-weight: bold;
}
\`\`\`

### Emphasis Class
\`\`\`css
.emphasis {
  color: #D9822B;
  font-style: italic;
}
\`\`\`

## Implementation in Tailwind CSS

To use these styles with Tailwind CSS, the following configuration has been added to the project:

\`\`\`js
// tailwind.config.js
{
  theme: {
    extend: {
      colors: {
        primary: "#2F8F2F", // Eato Green
        accent: {
          orange: "#D9822B", // Earthy Orange
          charcoal: "#2A2A2A", // Deep Charcoal
        }
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.3',
        'normal': '1.4',
        'relaxed': '1.5',
        'loose': '1.75',
      },
    }
  }
}
\`\`\`

## Usage Examples

### Button Example
\`\`\`jsx
<button className="bg-primary text-white hover:bg-accent-orange transition-colors duration-300">
  Primary Button
</button>
\`\`\`

### Link Example
\`\`\`jsx
<a href="#" className="text-accent-charcoal hover:text-primary hover:underline transition-colors duration-300">
  Default Link
</a>
\`\`\`

### Typography Example
\`\`\`jsx
<h1 className="text-4xl md:text-5xl font-bold leading-tight">Page Title</h1>
<h2 className="text-3xl md:text-4xl font-semibold leading-snug">Section Title</h2>
<p className="text-base leading-loose">
  Regular paragraph text with <span className="text-accent-orange italic">emphasized text</span> 
  for important points.
</p>
