import React, { useState,useRef, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChartTooltip } from "../../components/dashboard/ChartTooltip";
import { CSSProperties } from "@mui/material/styles/createMixins";

// assigning the types of the props that needs to be passed 
type TResponsiveAreaChartProps = {
  kpi: string;
  data: any[];
  collapse: boolean;
  colors: {
    stroke: string;
    fill: string;
  };
};

const containerStyles: CSSProperties = {
  width: "auto",
};

export const ResponsiveAreaChart = ({
  kpi,
  data,
  collapse,
  colors,
}: TResponsiveAreaChartProps) => {

  //usestate to set the initial startdate and enddate
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // useeffect use to do the side effects 
  useEffect(() => {
    const sortedDates = data
      .map((item) => new Date(item.date))
      .sort((a, b) => a.getTime() - b.getTime());
    const minDate = sortedDates[0];
    const maxDate = sortedDates[sortedDates.length - 1];

    setStartDate(minDate);
    setEndDate(maxDate);
  }, [data]);

  // data.filter used to set that the startdate must be always less than the enddate
  const filteredData = data.filter(
    (item) =>
      new Date(item.date) >= (startDate || new Date(0)) &&
      new Date(item.date) <= (endDate || new Date())
  );
  return (
    <>
    {/* datepicker div to select the start date and end date */}
      <div style={{ display: "flex", justifyContent: "end", fontSize: "15px" }}>
        <p style={{}}>Select Start Date :</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={endDate}
          placeholderText="Start Date"
        />

        <p style={{}}>Select End Date :</p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={endDate}
          placeholderText="End Date"
        />
      </div>

      {/* width is set to 100% of the parent container and height to 300 */}
      <ResponsiveContainer width="100%"height={300} style={containerStyles}>
        <AreaChart
          data={filteredData}
          height={500}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* making the horizontal line false and giving stroke color */}
          <CartesianGrid vertical={false} stroke="#ebe6e6" />
          <XAxis
            dataKey="date"
            tickCount={data?.length ?? 0}
            tick={{
              stroke: "light-grey",
              strokeWidth: 0.6,
              fontSize: "12px",
            }}
            axisLine={{ stroke: "transparent" }}
          />
          <YAxis
            tickCount={4}
            tick={{
              stroke: "light-grey",
              strokeWidth: 0.5,
              fontSize: "12px",
            }}
            axisLine={{ stroke: "transparent" }}
            interval="preserveStartEnd"
            domain={[0, "dataMax*1.50"]}
          />
          <Tooltip
            content={<ChartTooltip kpi={kpi} />}
            wrapperStyle={{
              backgroundColor: "rgba(0, 255, 255, 0.7)",
              border: "0 solid #000",
              color: "#FFFFFF",
              borderRadius: "10px",
              borderColor: "#ccc",
              boxShadow: "0 0 1px 1px rgba(0,0,0,0.25)",
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#03b5eb"
            strokeWidth={2}
            fill="none"
          />
        </AreaChart>
      </ResponsiveContainer>
      {/* paratag for displaying startdate and enddate */}
      <p
        className="text-xs"
        style={{
          display: "flex",
          justifyContent: "end",
          paddingTop: "20px",
          paddingRight: "14px",
          backgroundColor: "#FFF",
        }}
      >
        <span
          className="mr-1"
          style={{
            width: "20px",
            height: "2px",
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#03b5eb",
            marginTop: "9px",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        {/* changing the date to month date,year format */}
        {startDate?.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}{" "}
        -{" "}
        {endDate?.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </>
  );
};
