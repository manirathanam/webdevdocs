# Watch

Mostly in a web application a javascript function can be triggered in below ways.

**Internal javascript in the html document:** when browser encounters the `<script>` in the html document. its start executing the javascript code.

**By loading javascript into the browser:** when browser encounters the `<script>` its start downloading the javascript file from the server. once its downloaded its startes executing.

**By listening Event target:** we can bound event handler (javascript function) to Event target `DOM`,`Window`,... from javascript. whenever the Event target reacts to user-activity our event handler gets called.
