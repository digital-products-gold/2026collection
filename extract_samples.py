import os
import fitz  # PyMuPDF

def extract_pages(pdf_path, prefix, num_pages=2):
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        return
    
    print(f"Opening {pdf_path}...")
    doc = fitz.open(pdf_path)
    
    # Create directory if it doesn't exist
    os.makedirs('public/samples', exist_ok=True)
    
    for i in range(min(num_pages, len(doc))):
        page = doc.load_page(i)
        # Render at 150 DPI for good web quality
        pix = page.get_pixmap(dpi=150)
        output_path = f"public/samples/{prefix}_{i+1}.webp"
        # Save as PNG first, we can use PNG directly or let PIL convert to webp if needed.
        # PyMuPDF supports saving as PNG. We'll just save as PNG.
        png_path = f"public/samples/{prefix}_{i+1}.png"
        pix.save(png_path)
        print(f"Saved {png_path}")

base_dir = r"E:\products\Worldcup\World Cup 2026 _ Stickers-20260615T174159Z-3-001\World Cup 2026 _ Stickers"

# Main Product Samples
extract_pages(os.path.join(base_dir, "All the stickers here.pdf"), "main_stickers", 3)
extract_pages(os.path.join(base_dir, "Album + Golden Cards", "Album PDF 2026.pdf"), "main_album", 2)

# Bonus Samples
extract_pages(os.path.join(base_dir, "BONUS", "Golden.pdf"), "bonus_golden", 2)
extract_pages(os.path.join(base_dir, "BONUS", "SOBRES.pdf"), "bonus_sobres", 2)

print("Extraction complete.")
