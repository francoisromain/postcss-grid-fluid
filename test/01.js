const tests = {
  input: `.row-float {
    gf: row 1.5rem float;
}

.row-flex {
    gf: row 1.5rem flex;
}

.row {
    gf: row;
}
`,
  output: `.row-float {
    clear: both;
    margin-right: 1.5rem;
}

.row-float::after {
    content: "";
    display: table;
    clear: both;
}

.row-flex {
    clear: both;
    margin-right: 1.5rem;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    align-content: flex-start;
}

.row-flex::after {
    content: "";
    display: table;
    clear: both;
}

.row {
    clear: both;
    margin-right: 0;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    align-content: flex-start;
}

.row::after {
    content: "";
    display: table;
    clear: both;
}
`,
};

export default tests;
