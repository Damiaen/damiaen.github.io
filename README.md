## damiaen.github.io
Personal Portfolio website, hosted using GitHub Pages. This site contains old school projects from previous studies and some personal projects. This repository is mainly used for archiving old code for fun.  

The site can be accessed by going to "https://damiaen.github.io" or "https://damiaen.nl".

## General Notes
Some general notes that are not specific to this project, these notes can generally be ignored.

### GitHub settings
Set up your local Git to use the correct e-mail account, so GitHub shows the correct e-mail on commits.


```bash
# First check if the e-mail account is correct:
git config user.email

# If not, we can change the e-mail by running:
git config --gloabl user.email "mail@example.com"
```

### GitHub Pages Settings
To setup Github Pages with an custom domain name, some DNS settings need to be changed. Below is an example of some of the stuff that is required to correctly link said domain to the Github servers.


```
First => Set the @ record to the Github server ip adresses.
Second => Set CNAME records for www. and the root of the domain, and link these to the @
```
