from PIL import Image, ImageDraw, ImageFont
import os

font_path = "/System/Library/Fonts/PingFang.ttc"
try:
    font = ImageFont.truetype(font_path, 24, index=0)
except Exception as e:
    print(f"Error loading font {font_path}: {e}")
    # Fallback to default
    font = ImageFont.load_default()

qr_list = [
    ("injury_recovery_cn_qr.png", "车祸工伤 (CN)"),
    ("injury_recovery_en_qr.png", "Injury Recovery (EN)"),
    ("new_patient_special_qr.png", "$109 Special Offer")
]

output_dir = "public/qr-codes"

for filename, label in qr_list:
    input_path = os.path.join(output_dir, filename)
    if not os.path.exists(input_path):
        print(f"Skipping {filename}, file not found.")
        continue
    
    try:
        qr_img = Image.open(input_path).convert("RGBA")
        width, height = qr_img.size
        
        # New image size: Width unchanged (or padded), Height + label height
        # Calculate label size
        # Use simple calculation if getbbox fails on default font
        try:
            bbox = font.getbbox(label)
            text_width = bbox[2] - bbox[0]
            text_height = bbox[3] - bbox[1]
        except AttributeError:
             # Fallback for older Pillow
             text_width, text_height = font.getsize(label)
        
        padding = 20
        label_height = text_height + padding * 2
        
        new_width = max(width, text_width + padding * 2)
        new_height = height + label_height
        
        new_img = Image.new("RGBA", (new_width, new_height), (255, 255, 255, 255))
        
        # Paste QR centered
        qr_x = (new_width - width) // 2
        new_img.paste(qr_img, (qr_x, 0), qr_img)
        
        # Draw text centered
        draw = ImageDraw.Draw(new_img)
        text_x = (new_width - text_width) // 2
        text_y = height + (label_height - text_height) // 2 - padding # approximate center vertically in the label area
        
        draw.text((text_x, text_y), label, font=font, fill=(0, 0, 0, 255))
        
        output_filename = filename.replace(".png", "_labeled.png")
        output_path = os.path.join(output_dir, output_filename)
        new_img.save(output_path)
        print(f"Saved labeled image to {output_path}")

    except Exception as e:
        print(f"Error processing {filename}: {e}")
