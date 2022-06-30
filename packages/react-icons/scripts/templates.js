function iconRowTemplate(icon, formattedName, iconData, type = "module") {
  switch (type) {
    case "module":
      return (
        `export const ${formattedName} = GenIcon(${JSON.stringify(iconData)});\n`
      );
    case "common":
      return (
        `module.exports.${formattedName} = GenIcon(${JSON.stringify(iconData)});\n`
      );
    case "dts":
      return `export declare const ${formattedName}: IconType;\n`;
  }
}
function iconsEntryTemplate(iconId, type = "module") {
  switch (type) {
    case "module":
      return `export * from './${iconId}';\n`;
    case "dts":
      return `export * from './${iconId}';\n`;
  }
}

module.exports = {
  iconRowTemplate,
  iconsEntryTemplate,
};
