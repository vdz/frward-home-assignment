import { useSelector } from "react-redux";
import { ErrorInfoWrapper } from "./ErrorInfo.styled";
import { RootState } from "../../store/store";
import React, { useMemo } from "react";
import { UserError } from "../../store/user/types";

export const ErrorInfo: React.FC = () => {
    const errors = useSelector((state: RootState) => state.user.errors);
    // no need for use memo with React19, 
    // also this particular case probably shouldn't be memoized
    const [invalid, empty] = useMemo(() => getErrorCounts(), [errors]);

    return (
        <ErrorInfoWrapper>
        Errors: Empty Fields — {empty}, Invalid Fields — {invalid}
    </ErrorInfoWrapper>
    );

    function getErrorCounts() {
        let [invalid, empty] = [0, 0];
        Object.values(errors).forEach((error) => {
            for (const key in error) {
                if (error[key] === 'invalid') invalid++;
                if (error[key] === 'empty') empty++;
            }
        });
        return [invalid, empty];
    }
}
