export const changeToPalette = (palette) => {
  changeProperties(paletteToProperties(palette));
};

export const changeProperties = (properties) => {
  Object.entries(properties).forEach((entry) => {
    const [key, value] = entry;
    document.body.style.setProperty(key, value);
  });
};

export const paletteToProperties = (palette) => {
  return {
    "--color-background-light": palette.light.bgColor
      ? palette.light.bgColor.hex
      : "var(--color-white)",
    "--color-text-light": palette.light.textColor
      ? palette.light.textColor.hex
      : "var(--color-white)",
    "--color-detail-light": palette.light.detailColor
      ? palette.light.detailColor.hex
      : "var(--color-black)",

    "--color-background-dark": palette.dark.bgColor
      ? palette.dark.bgColor.hex
      : "var(--color-white)",
    "--color-text-dark": palette.dark.textColor
      ? palette.dark.textColor.hex
      : "var(--color-white)",
    "--color-detail-dark": palette.dark.detailColor
      ? palette.dark.detailColor.hex
      : "var(--color-white)",
  };
};
