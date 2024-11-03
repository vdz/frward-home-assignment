import { Slice } from "./types";
import styled from "styled-components";

export const StatsWrapper = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    gap: 0rem;
    border-radius: 1em;
    background-color: #f0f0f0;
    max-width: 60rem;
    margin: auto;
    border: 4px solid #000;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    height: calc(100vh - 100px);
    overflow: auto;
    font-family: monospace;
`;


export const ChartWrapper = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    margin: auto;
`;

export const PieChart = styled.div<{ slices: Slice[] }>`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid #000;
    background: conic-gradient(
    ${({ slices }) => {
        let acc = 0;
        return slices
            .map((slice) => {
               const start = acc;
                const end = start + slice.percentage;
                acc = end;
                return `${slice.color} ${start}% ${end}%`;
            })
        .join(", ")
        }
    }
  );
`;

export const Label = styled.div<{ angle: number; color: string }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ angle }) => `rotate(${angle}deg) translate(280px)`};
    transform-origin: 0px 0px;
    font-weight: bold;
    font-size: 0.9em;
    color: ${({ color }) => color};
    background-color: #fff;
    padding: 0.5em;
    border-radius: 0.5em;
`;
