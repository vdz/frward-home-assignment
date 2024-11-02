import React from "react";
import { ChartWrapper, Label, PieChart, StatsWrapper } from "./StatsDashboard.styled";
import countries from "../../data/countries.json";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Slice } from "./types";

export const StatsDashboard: React.FC = () => {
    // The below code (the 3 line) can be converted to a custom hook
    const users = useSelector((state: RootState) => state.user.users);
    // no need to memoize in React19, otherwise, need to (based on users)!
    const {indexed: data, data: slices } = getPercentages();

    return (
        <StatsWrapper>
            <h1>Stats - {users.length} users</h1>
            <ChartWrapper>
                <PieChart slices={slices} />
                {getLabels()}
            </ChartWrapper>
        </StatsWrapper>
    );

    function getPercentages(): { indexed: Record<string, Slice>, data: Slice[] } {
        if (!users.length) return { indexed: {}, data: [] };
        
        const indexed = {};
        users.forEach(user => {
            const country = user.country;
            if (!country) return;
            if (!indexed.hasOwnProperty(country)) {
                indexed[country] = {
                    count: 0,
                    label: country,
                    percentage: 0,
                    color: generateRandomHexColor(),
                };
            }
            indexed[country].count++;
        });

        countries.forEach(country => {
            const count = indexed[country]?.count || 0;
            indexed[country].percentage = (count / users.length) * 100;
        });

        return {
            indexed, // for quick access by country if needed
            data: Object.values(indexed),
        };
    }

    function generateRandomHexColor() {
        return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
    }

    function getLabels() {
        let acc = 0;
        const angleCorrection = 90;
        return (
            slices.map((slice, index) => {
                const angle = (acc + slice.percentage / 2) * 3.6 - angleCorrection;
                acc += slice.percentage;
                return (
                    <Label
                    key={`label-${index}`}
                    angle={angle}
                    color={slice.color}
                >
                  {slice.label} - {slice.count}
                    </Label>
    
                )                
            }
            ))
    }

    function calculateAngle(index, slices) {
        const cumulativePercentage = slices
          .slice(0, index)
          .reduce((acc, curr) => acc + curr.percentage, 0);
        const sliceAngle = (cumulativePercentage + slices[index].percentage / 2) * 3.6 - 100;
        return sliceAngle;
    }
}