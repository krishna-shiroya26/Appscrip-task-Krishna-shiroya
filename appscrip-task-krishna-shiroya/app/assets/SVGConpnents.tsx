/* eslint-disable max-len */

const getViewBox = (name: string, width: string, height: string) => {
  switch (name) {
    default:
      return `0 0 ${width} ${height}`;
  }
};

const getPath = (name: string, props: any) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { fill } = props;
  switch (name) {
    case "lorem-ipsum-icon":
      return (
        <>
          <path
            stroke="#EB4C6B"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.667 7.261V2.728c0-1-.427-1.4-1.487-1.4h-2.693c-1.06 0-1.487.4-1.487 1.4v4.533c0 1 .427 1.4 1.487 1.4h2.693c1.06 0 1.487-.4 1.487-1.4ZM14.667 13.272v-1.2c0-1-.427-1.4-1.487-1.4h-2.693c-1.06 0-1.487.4-1.487 1.4v1.2c0 1 .427 1.4 1.487 1.4h2.693c1.06 0 1.487-.4 1.487-1.4ZM7.003 8.728v4.534c0 1-.427 1.4-1.487 1.4H2.823c-1.06 0-1.487-.4-1.487-1.4V8.727c0-1 .427-1.4 1.487-1.4h2.693c1.06 0 1.487.4 1.487 1.4ZM7.003 2.728v1.2c0 1-.427 1.4-1.487 1.4H2.823c-1.06 0-1.487-.4-1.487-1.4v-1.2c0-1 .427-1.4 1.487-1.4h2.693c1.06 0 1.487.4 1.487 1.4Z"
          />
        </>
      );

    default:
      return <></>;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "",
  viewBox = "",
  height = "24",
  width = "24",
  className = "",
  strokeWidth = 1.5,
  bgfill = "none",
  stroke = "",
  stopColor = "",
  iconprimary = "",
}) => (
  <svg
    stroke={stroke}
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name, width, height)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, {
      fill,
      strokeWidth,
      bgfill,
      stroke,
      stopColor,
      iconprimary,
    })}
  </svg>
);

export default SVGIcon;
