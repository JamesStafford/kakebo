import React from "react";

const ExpenseTable = (props) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <div>
            <h2>{props.section}</h2>
            <table>
                <tr>
                    {days.map(day => {
                        return (<th key={day}>{day}</th>);
                    })}
                </tr>
                <tr>
                    {days.map(day => {
                        return (
                            <td key={day}>
                                <textarea/>
                            </td>
                        );
                    })}
                </tr>
            </table>
        </div>
    );
};

export default ExpenseTable;