import React from "react";

export const ChartTooltip = ({
  active,
  payload,
  label,
  coordinate,
  colors,
  kpi,
}: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;

    // styling the ChartTooltip
    const tooltipStyle = {
      // used to access the cursor pointer to show the particular point data of Areachart
      left: coordinate.x,
      top: coordinate.y,
      width: "auto",
      height: "auto",
      color: "#000",
      backgroundColor: "#FFF",
    };

    return (
      <div
        className="p-1  items-start border border-grey rounded-lg text-zinc-50"
        style={tooltipStyle}
      >
        <p className="text-xs">
          <span
            className="mr-1"
            style={{
              width: "20px",
              height: "2px",
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#03b5eb",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>

          {/* label for showing the particular date */}
          {/* dataPoint.value used to get the particular data of the Areachart at the cursor point  */}

          {`${label} ${"\u00A0"}${"\u00A0"} ${dataPoint.value}`}{" "}
        </p>
      </div>
    );
  }

  return null;
};
