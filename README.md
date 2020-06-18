# react-and-apis-in-a-nutshell

React + APIs in a Nutshell

    Due Thursday by 11:59pm Points 15 Submitting a website url Available Jun 18 at 12am - Jun 21 at 11:59pm 4 days

Now that you've created an API with Django Rest Framework (DRF), let's put that API to use!

 

You all remember React (Links to an external site.)Links to an external site.. right? Well. it's just the tool we need for accessing the data from our API. In this assessment, we'll create a Single Page Application (SPA) that fetches data from our backend API and displays it on our React frontend.
Your Task

For this assessment, we will be creating a new React frontend and reusing our backend from Django ReST Framework: APIs in a Nutshell 

Frontend

Create a new react app. You'll want to use something like Facebook's Create React App (Links to an external site.)Links to an external site.. Please check the documentation, because this project's documentation is frequently updated. You can use either npm or yarn as your package manager, it's up to your personal preference.

This react app will be relatively simple. We don't need to worry about using Redux, and we just need to create one component to handle everything we need.

Requirements

    Uses fetch (Links to an external site.)Links to an external site. to get data from your Django Rest Framework API → https://reactjs.org/docs/faq-ajax.html (Links to an external site.)Links to an external site.
    Displays all instances of Shoe on a single page
    Each attribute of a given Shoe is displayed:
        size
        brand name
        manufacturer
        color
        material
        shoe_type
        fasten_type

 

Backend

Our backend API is already functional, but we do need to make some changes before it will talk to our frontend. The frontend will be displaying shoes, so be sure to add at least 5 new instances of shoe to your backend. In addition, we'll need to worry about CORS (Links to an external site.)Links to an external site.. DRF has a documentation page (Links to an external site.)Links to an external site. on how to handle CORS via a python package called django-cors-headers (Links to an external site.)Links to an external site.. Use this package to allow your frontend to fetch data.

Requirements

    Backend is setup with django-cors-headers (Links to an external site.)Links to an external site.
    Create at least 5 instances of Shoe via the DRF "admin panel".

Submission

You should already have a repo for your backend. Be sure to create a new repo for the frontend.

Link each one in the readme for the repos, then submit either one.

https://github.com/<github_username>/drf_shoestore_api

or

https://github.com/<github_username>/drf_shoestore_frontend

Rubric
React + APIs = <3
React + APIs = <3
Criteria 	Ratings 	Pts
This criterion is linked to a Learning Outcome Uses fetch to get data from your Django Rest Framework API
	
3.0 pts
Full Marks
	
0.0 pts
No Marks
	
3.0 pts
This criterion is linked to a Learning Outcome Displays all instances of Shoe on a single page
	
3.0 pts
Full Marks
	
0.0 pts
No Marks
	
3.0 pts
This criterion is linked to a Learning Outcome Each attribute of a given Shoe is displayed
view longer description
	
3.5 pts
Full Marks
	
0.0 pts
No Marks
	
3.5 pts
This criterion is linked to a Learning Outcome Backend is setup with django-cors-headers
	
3.0 pts
Full Marks
	
0.0 pts
No Marks
	
3.0 pts
This criterion is linked to a Learning Outcome Create at least 5 instances of Shoe via the DRF "admin panel".
	
2.5 pts
Full Marks
	
0.0 pts
No Marks
	
2.5 pts

