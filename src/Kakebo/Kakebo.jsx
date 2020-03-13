import React from "react";
import ExpenseTable from "./ExpenseTable";

const Kakebo = () => {
    const sections = [
        "Essential Expenses",
        "Optional Expenses",
        "Entertainment and Leisure",
        "Extra and Unforeseen Events"
    ];

    return (
        <>
            {sections.map(section => <ExpenseTable key={section} section={section}/>)}
        </>
    )
};

export default Kakebo;