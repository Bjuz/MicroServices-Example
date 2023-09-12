# ASP.NET Calculator with Node.js Microservices

This is a simple calculator project developed in ASP.NET that utilizes Node.js microservices to perform basic mathematical operations, such as addition, subtraction, and multiplication. The main objective of this project is to demonstrate the microservices architecture and how it can be integrated with an ASP.NET application.

## Project Setup

### Prerequisites

- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Configuration Steps

1. **Clone the Repository**

   Clone this repository to your local machine.
   
2. **Configure the Microservices**
    install the dependencies for the sum, subtract, and multiply microservices by running the following command in each respective directory:
    cd sum/WebApi/Apis
    npm install
    
    cd subtract/WebApi/Apis
    npm install
    
    cd multiplyWebApi/Apis
    npm install
   
3. **Start the Microservices**
   cd sum/WebApi/Apis
   npm start

   cd subtract/WebApi/Apis
   npm start
    
   cd multiply/WebApi/Apis
   npm start

4. **Init the Calculator app**
   cd Calculator\app\SampleWebApp
   dotnet run

5.**Configure in AKS**
  You can use the pipeline attached in all the folders with the name azure-pipelines.yml, this pipeline was created in azure DevOps. 
  Please keep in mind that this pipeline will only generate the artifact but you need to configure the deployment in the release section 


