# svelte-azure-swa-template
This is a template website using SvelteKit which uses the [Azure SWA adapter](https://github.com/geoffrich/svelte-adapter-azure-swa) to deploy as an [Azure Static Web App](https://azure.microsoft.com/en-gb/products/app-service/static). The adapter allows for server side rendering, which is not a traditional feature of an Azure SWA.

This repository is a template, so you can easily take it and build your own website.

## Azure Setup
1. Create a Static Web App resource
2. Set the name, hosting plan, region etc to your preference
3. Under "Deployment details", choose GitHub, and grant access for Azure to use your account/organization
4. Select your desired organization, repository and branch
5. Set the "Build Presets" to SvelteKit, and leave the remaining three boxes as default
6. Create
7. Find the website link from within the resource (it may take minutes for the Azure service to create & for the workflow to run)
