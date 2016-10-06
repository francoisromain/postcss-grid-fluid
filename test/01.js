const tests = {
  input: `.row-float {
  gf: row 1.5rem float;
}

.blob-float {
  gf: blob 1/3 1.5rem float;
}

.row-flex {
  gf: row 1.5rem;
}

.blob-flex {
  gf: blob 1/2 1.5rem;
}

.row-with-margin {
  margin: 0 auto;
  gf: row 0 float;
}
`,
  output: `.row-float {
  clear: both;
  margin-right: -1.5rem;
}

.row-float::after {
  content: "";
  display: table;
  clear: both;
}

.blob-float {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  width: calc(33.333333333333336% - 1.5rem);
  float: left;
}

.row-flex {
  clear: both;
  margin-right: -1.5rem;
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

.blob-flex {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 0 1 calc(50% - 1.5rem);
}

.row-with-margin {
  margin: 0 auto;
  clear: both;
}

.row-with-margin::after {
  content: "";
  display: table;
  clear: both;
}
`,
};

export default tests;
