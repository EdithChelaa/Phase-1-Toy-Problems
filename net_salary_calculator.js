function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.15; 
    const nhifRate = 0.2;
    const nssfRate = 0.5;

    const grossSalary = basicSalary + benefits;

    const payee = grossSalary * taxRate;

    const nhifDeductions = grossSalary * nhifRate;

    const nssfDeductions = grossSalary * nssfRate;

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    console.log("Gross Salary: $" + grossSalary.toFixed(2));
    console.log("Payee (Tax): $" + payee.toFixed(2));
    console.log("NHIF Deductions: $" + nhifDeductions.toFixed(2));
    console.log("NSSF Deductions: $" + nssfDeductions.toFixed(2));
    console.log("Net Salary: $" + netSalary.toFixed(2));
}


