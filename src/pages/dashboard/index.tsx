import React, { useMemo } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { IChartDatum, TTab } from "../../interfaces";
import Stats from "../../components/dashboard/Stats";

// Filter to get certain data from the API
const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs()?.subtract(30, "days")?.startOf("day"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().startOf("day"),
  },
];

// Gets data from the api by using Resource 
export const Dashboard: React.FC = () => {
  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  // Arrow function to format the data aquired from the API to required format
  // In this function it is formated to day month year format
  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };

  // A variable to store the memoized data
  const memoizedRevenueData = useMemoizedChartData(dailyRevenue);

  const tabs: TTab[] = [
    {
      // unique id is given for each set of data
      id: 1,
      content: (
        //the memoized data is passed to the ResponsiveAreaChart Component
        <ResponsiveAreaChart
          kpi="Daily revenue"
          collapse={true}
          data={memoizedRevenueData}
          colors={{
            stroke: "rgb(255, 255, 255)",
            fill: "rgba(255, 255, 255, 1)",
          }}
        />
      ),
    },
  ];

  return (
    <>
      <Stats stats={tabs} />
      <RecentSales />
    </>
  );
};
