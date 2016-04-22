const tests = {
  input: `.blob {
  gf: blob;
}

.blob-1 {
  gf: blob 1 1.5rem flex;
}

.blob-1-8 {
  gf: blob 1/8 0 flex;
}

.blob-1-3 {
  gf: blob 1/3 1.5rem flex;
}

.blob-2-5 {
  gf: blob 2/5 1.5rem float;
}

.blob-3-5 {
  gf: blob 3/5 1.5rem float;
}

.blob-4-7 {
  gf: blob 4/7;
}
`,
  output: `.blob {
  flex: 0 1 100%;
}

.blob-1 {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 0 1 calc(100% - 1.5rem);
}

.blob-1-8 {
  flex: 0 1 12.5%;
}

.blob-1-3 {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 0 1 calc(33.333333333333336% - 1.5rem);
}

.blob-2-5 {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  width: calc(40% - 1.5rem);
  float: left;
}

.blob-3-5 {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  width: calc(60% - 1.5rem);
  float: left;
}

.blob-4-7 {
  flex: 0 1 57.142857142857146%;
}
`,
};

export default tests;
