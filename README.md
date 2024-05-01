# Front end part of final project of HackerU bootcamp

## "New Visit" App:

### About:

My application is a platform for scheduling appointments between users and experts. Users can search experts and watch their profiles and available appointment slots to book appointment. To make appointment with expert that user wants he have to be registered.

### Authorization page:

In authorization page users can log in to the platform, to register as regular user or expert. After authorization users moves to their dashboard where they can find services they want.

### Expert users:

Each expert has their own schedule. With schedule expert can create appointment slots, to see booked appointments and cancel appointments he wants. Also schedule has calendar with indicator on days with appointments. Days with reserved appointments have yellow badge and unreserved green.

### Cancelation appointments:

Users that wants to cancel appointment can do this going to "My appointments" page. Experts can do that in their schedules.

### Likes:

Users can to save favorite experts by clicking on hearth icon and liked experts will be saved in "Favorite experts" page.

### Editing profile:

All registrated users can edit their profile data by clicking on dashboard card "Edit profile"

## Installation:

### Client:

To install the app you have to download this repo you can do it by git command:

```bash
git clone https://github.com/ArsenRogovoi/frontend-final-project-hackeru.git
```

after downloading this repo open it in console and download all the dependencies:

```bash
npm run i
```

### Server:

This app sends http requests to the server. And this app need it to run properly. [Click here](https://github.com/ArsenRogovoi/backend-final-project-hackeru) to get to git hub repo of the server to install it.

After you installed all the app dependencies and installed the server you can to run the application by openning it in console and running:

```
npm run start
```
