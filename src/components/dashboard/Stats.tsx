import React from "react";
import { useState } from "react";
import pencil from "../../../public/pencil.png";
import graph from "../../../public/graph.png";
import questionMark from "../../../public/questionMark.png";
import { TabView } from "./TabView";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";

// Stats component displaying the stats of the data and to display the Areachart in collapse
type TStats = {
  stats: any;
};

const Stats = ({ stats }: TStats) => {
  const [open, setOpen] = useState(false);

  return (
    // div tag to style the entire content
    <div
      style={{
        background: "#FFF",
        height: "auto",
        top: "121px",
        border: "1px",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
        width: "auto",
        left: "28px",
        gap: "10px",
        padding: "10px",
        paddingBottom: "30px",
      }}
    >
      {/* div tag for the first stats */}
      <div
        className="w-full mx-auto mb-4 flex w-96 flex-col justify-center  items-stretch md:flex-row md:justify-between drop-shadow-md"
        style={{
          alignItems: "center",
          height: "94px",
          width: "auto",
          left: "8px",
          paddingTop: "30px",
          fontSize: "18px",
          fontWeight: "450",
          border: "1px",
        }}
      >
        <div
          className="card w-96   hover:bg-base-200 "
          style={{ height: "6rem", justifyContent: "center" }}
        >
          <div className="card-body">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="relative group">
                <h2
                  className="card-title tooltip tooltip-bottom "
                  style={{
                    textDecoration: "underline #c2bebe dotted",
                    textUnderlineOffset: "3px ",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Online Store Sessions{" "}
                </h2>
                {/* div tag to show the content when hovered the stats */}
                <div
                  style={{
                    width: "356px",
                    height: "80px",
                    background: "#FFFFFF",
                    zIndex: 10,
                    borderRadius: "10px",
                    padding: "15px,10px,15px,10px",
                    fontSize: "13px",
                  }}
                  className="absolute top-10  p-4 shadow-lg rounded opacity-0 group-hover:opacity-100 pointer-events-none"
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ fontWeight: 600, paddingBottom: "10px" }}>
                      Online Store Sessions
                    </p>
                    <p>
                      Your online store's traffic volume , shows in sessions
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="dropdown dropdown-bottom"
                style={{ position: "relative", zIndex: "9999" }}
              >
                <div tabIndex={0} role="button" className="group">
                  <img
                    className=""
                    style={{ width: "20px", zIndex: "9999" }}
                    src={pencil}
                  />
                </div>
                <ul
                  tabIndex={0}
                  style={{
                    minWidth: "20rem",
                    padding: "10px",
                    background: "#FFFFFF",
                    zIndex: "9999",
                  }}
                  className="p-2 shadow menu dropdown-content z-[1]  rounded-box w-52 "
                >
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Average Order Values</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>Conversion Rate </p>
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Gross Sales</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Net return value </p>
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>
                        Store search conversion
                      </p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>Return rate</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>255,581</p>
          </div>
        </div>

        <div
          className="card w-96    hover:bg-base-200 "
          style={{ height: "6rem", justifyContent: "center" }}
        >
          <div className="card-body">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="relative group">
                <h2
                  className="card-title tooltip tooltip-bottom"
                  style={{
                    textDecoration: "underline #c2bebe dotted",
                    textUnderlineOffset: "3px ",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Net Return Value
                </h2>
                <div
                  style={{
                    width: "356px",
                    height: "80px",
                    background: "#FFFFFF",
                    zIndex: 10,
                    borderRadius: "10px",
                    padding: "15px,10px,15px,10px",
                    fontSize: "13px",
                  }}
                  className="absolute top-10   p-4 shadow-lg rounded opacity-0 group-hover:opacity-100 pointer-events-none"
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ fontWeight: 600, paddingBottom: "10px" }}>
                    Net Return Value
                    </p>
                    <p>
                      Your online store's traffic volume , shows in sessions
                    </p>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="group">
                  <img className="" style={{ width: "20px" }} src={pencil} />
                </div>
                <ul
                  tabIndex={0}
                  style={{ minWidth: "20rem", padding: "10px" }}
                  className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 "
                >
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Average Order Values</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>Conversion Rate </p>
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Gross Sales</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Net return value </p>
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>
                        Store search conversion
                      </p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>Return rate</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>-$15,07.44</p>
          </div>
        </div>
        <div
          className="card w-96   hover:bg-base-200 "
          style={{ height: "6rem", justifyContent: "center" }}
        >
          <div className="card-body">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="relative group">
                <h2
                  className="card-title tooltip tooltip-bottom"
                  style={{
                    textDecoration: "underline #c2bebe dotted",
                    textUnderlineOffset: "3px ",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Total Orders
                </h2>
                <div
                  style={{
                    width: "356px",
                    height: "80px",
                    background: "#FFFFFF",
                    zIndex: 10,
                    borderRadius: "10px",
                    padding: "15px,10px,15px,10px",
                    fontSize: "13px",
                  }}
                  className="absolute top-10  p-4 shadow-lg rounded opacity-0 group-hover:opacity-100 pointer-events-none"
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ fontWeight: 600, paddingBottom: "10px" }}>
                    Total Orders
                    </p>
                    <p>
                      Your online store's traffic volume , shows in sessions
                    </p>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className="group">
                  <img className="" style={{ width: "20px" }} src={pencil} />
                </div>
                <ul
                  tabIndex={0}
                  style={{
                    minWidth: "20rem",
                    padding: "10px",
                    marginTop: "2.5rem",
                    marginRight: "-1rem",
                  }}
                  className="p-2 shadow menu dropdown-content z-10 top-0 right-10 bg-base-100 rounded-box w-52 "
                >
                  <li className="relative group z-20">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Average Order Values</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group z-20">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>Conversion Rate </p>
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group z-20">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Gross Sales</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Net return value </p>
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>
                        Store search conversion
                      </p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>Return rate</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>10,511</p>
          </div>
        </div>
        <div
          className="card w-96   hover:bg-base-200 "
          style={{ height: "6rem", justifyContent: "center" }}
        >
          <div className="card-body">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="relative group">
                <h2
                  className="card-title tooltip tooltip-bottom"
                  style={{
                    textDecoration: "underline #c2bebe dotted",
                    textUnderlineOffset: "3px ",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Conversion rate
                </h2>
                <div
                  style={{
                    width: "356px",
                    height: "80px",
                    background: "#FFFFFF",
                    zIndex: 10,
                    borderRadius: "10px",
                    padding: "15px,10px,15px,10px",
                    fontSize: "13px",
                  }}
                  className="absolute top-10  p-4 shadow-lg rounded opacity-0 group-hover:opacity-100 pointer-events-none"
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ fontWeight: 600, paddingBottom: "10px" }}>
                    Conversion rate
                    </p>
                    <p>
                      Your online store's traffic volume , shows in sessions
                    </p>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className="group">
                  <img className="" style={{ width: "20px" }} src={pencil} />
                </div>
                <ul
                  tabIndex={0}
                  style={{
                    minWidth: "20rem",
                    padding: "10px",
                    marginTop: "2.5rem",
                    marginRight: "-1rem",
                  }}
                  className="p-2 shadow menu dropdown-content z-10 top-0 right-10 bg-base-100 rounded-box w-52 "
                >
                  <li className="relative group z-20">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Average Order Values</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group z-20">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>Conversion Rate </p>
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group z-20">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Gross Sales</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}> Net return value </p>
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>
                        Store search conversion
                      </p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={graph}
                      />
                      <p style={{ fontSize: "12px" }}>Return rate</p>{" "}
                      <img
                        className="opacity-0 group-hover:opacity-100"
                        style={{
                          marginLeft: "3rem",
                          width: "15px",
                          height: "15px",
                        }}
                        src={questionMark}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>3.18%</p>
          </div>
        </div>
        <div className="card w-6 ">
          <IconButton
            onClick={() => setOpen(!open)}
            aria-label="expand"
            size="small"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </div>
      </div>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <Container
            sx={{
              height: "auto",
              width:"auto",
            }}
          >
            <TabView tabs={stats} />
          </Container>
        </CardContent>
      </Collapse>
    </div>
  );
};

const styles = {
  cardTitle: {
    display: "flex",
    flexirection: "space-between",
  },
};

export default Stats;
