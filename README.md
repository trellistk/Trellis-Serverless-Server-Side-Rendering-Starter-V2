# Trellis TK Serverless SSR Starter V2

This project exists to quickly set up an Server Side Rendering website using AWS lambda functions 

# Quickstart

1. Clone the repo
   
  ```bash
  git cl
  ```

2. Install the serverless CLI

  ```bash
  npm install -g serverless
  ```

3. Install npm packages/dependencies

  ```bash
  npm i
  ```

4. Install serverless plugins

  ```bash
  sls dynamodb install
  ```

5. Run the app locally

  ```bash
  npm run start-local
  ```

Available routes will be printed out in the terminal.


## Repository Quick Overview
- .github: github actions for our CI/CD pipeline
- functions: ourlambda functions:
- templates: html templates that can be used to serve pages.
- package.json: You can find scripts to run the app here
- serverless.yaml: Serverless settings and route declarations