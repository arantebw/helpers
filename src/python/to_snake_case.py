import re


def to_snake_case(filename: str) -> str:
    """Reformats a file's name to snake_case format."""

    # Remove unwanted characters and all but the last dot
    cleaned = re.sub(r"[^a-zA-Z0-9._\s]|\.(?=.*\.)", "", filename.strip())

    # Replace whitespace with underscores and remove leading underscores
    cleaned = re.sub(r"\s+", "_", cleaned)
    cleaned = re.sub(r"^_+", "", cleaned)

    return cleaned.lower()
