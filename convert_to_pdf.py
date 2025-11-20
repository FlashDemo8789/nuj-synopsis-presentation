#!/usr/bin/env python3
"""
Convert markdown synopsis to PDF with academic formatting
"""

import markdown
from weasyprint import HTML, CSS
from pathlib import Path

def convert_md_to_pdf(md_file, pdf_file):
    """Convert markdown file to PDF with academic styling"""

    # Read markdown content
    with open(md_file, 'r', encoding='utf-8') as f:
        md_content = f.read()

    # Convert markdown to HTML
    md_processor = markdown.Markdown(extensions=[
        'extra',
        'codehilite',
        'tables',
        'toc',
        'sane_lists'
    ])
    html_content = md_processor.convert(md_content)

    # Academic CSS styling
    css_style = """
    @page {
        size: A4;
        margin: 2.5cm 2.5cm 2.5cm 2.5cm;
        @top-center {
            content: "PhD Research Synopsis - Cognitive Governance";
            font-size: 9pt;
            font-family: "Times New Roman", serif;
        }
        @bottom-center {
            content: "Page " counter(page);
            font-size: 9pt;
            font-family: "Times New Roman", serif;
        }
    }

    body {
        font-family: "Times New Roman", serif;
        font-size: 12pt;
        line-height: 1.6;
        text-align: justify;
        color: #000;
    }

    h1 {
        font-size: 18pt;
        font-weight: bold;
        text-align: center;
        margin-top: 24pt;
        margin-bottom: 12pt;
        page-break-before: auto;
        color: #000;
    }

    h2 {
        font-size: 14pt;
        font-weight: bold;
        margin-top: 18pt;
        margin-bottom: 10pt;
        page-break-after: avoid;
        color: #000;
    }

    h3 {
        font-size: 13pt;
        font-weight: bold;
        margin-top: 14pt;
        margin-bottom: 8pt;
        page-break-after: avoid;
        color: #000;
    }

    h4 {
        font-size: 12pt;
        font-weight: bold;
        margin-top: 12pt;
        margin-bottom: 6pt;
        color: #000;
    }

    p {
        margin-bottom: 10pt;
        orphans: 3;
        widows: 3;
    }

    ul, ol {
        margin-left: 20pt;
        margin-bottom: 10pt;
    }

    li {
        margin-bottom: 4pt;
    }

    strong, b {
        font-weight: bold;
    }

    em, i {
        font-style: italic;
    }

    code {
        font-family: "Courier New", monospace;
        font-size: 10pt;
        background-color: #f5f5f5;
        padding: 2pt;
    }

    pre {
        font-family: "Courier New", monospace;
        font-size: 10pt;
        background-color: #f5f5f5;
        padding: 10pt;
        margin: 10pt 0;
        overflow-x: auto;
        page-break-inside: avoid;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        margin: 10pt 0;
        page-break-inside: avoid;
        font-size: 11pt;
    }

    th, td {
        border: 1pt solid #000;
        padding: 6pt;
        text-align: left;
    }

    th {
        background-color: #f0f0f0;
        font-weight: bold;
    }

    blockquote {
        margin: 10pt 20pt;
        padding-left: 10pt;
        border-left: 3pt solid #ccc;
        font-style: italic;
    }

    hr {
        border: none;
        border-top: 1pt solid #000;
        margin: 20pt 0;
    }

    .page-break {
        page-break-after: always;
    }

    /* Title page styling */
    h1:first-of-type {
        margin-top: 100pt;
        font-size: 20pt;
    }
    """

    # Create full HTML document
    full_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>PhD Research Synopsis - Cognitive Governance</title>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """

    # Convert to PDF
    HTML(string=full_html).write_pdf(
        pdf_file,
        stylesheets=[CSS(string=css_style)]
    )

    print(f"✓ Successfully converted {md_file} to {pdf_file}")
    print(f"  Output size: {Path(pdf_file).stat().st_size / 1024:.1f} KB")

if __name__ == "__main__":
    md_file = "/home/user/nuj-synopsis-presentation/synopsis_revised_enhanced.pdf.md"
    pdf_file = "/home/user/nuj-synopsis-presentation/synopsis_revised_enhanced.pdf"

    convert_md_to_pdf(md_file, pdf_file)
