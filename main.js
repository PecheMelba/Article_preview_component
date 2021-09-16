let share_pannel_obj = document.getElementsByClassName('share_pannel')[0];
let author_pannel_obj = document.getElementsByClassName('author_pannel')[0];
let share_pannel_mobile_obj = document.getElementsByClassName('share_pannel_mobile')[0];

/*If share button is clicked*/
document.getElementsByClassName('share_btn')[0].onclick = function(event)
{     
    if (share_pannel_obj.style.display === "flex")
    {
        share_pannel_obj.style.display = "none";

        if (window.matchMedia("(min-width: 720px)").matches) 
        {
            author_pannel_obj.style.display = "flex";
        }
    }
    else 
    {
        if (window.matchMedia("(max-width: 720px)").matches) 
        {
            author_pannel_obj.style.display = "none";
            share_pannel_mobile_obj.style.display = "flex";
        }
        else share_pannel_obj.style.display = "flex";
    }
}
/*If mobile share button is clicked*/
document.getElementsByClassName('share_btn_mobile')[0].onclick = function(event)
{
    if (share_pannel_mobile_obj.style.display === "flex")
    {
        author_pannel_obj.style.display = "flex";
        share_pannel_mobile_obj.style.display = "none";
    }
}

/*Media querry changed state*/
const mediaQuery = window.matchMedia('(min-width: 720px)');

function handleTabletChange(e) 
{
  // Check if the media query is true
  if (e.matches) //if viewports at least 720px wide
  {
    console.log('MODE PC');
    share_pannel_mobile_obj.style.display = "none";
    author_pannel_obj.style.display = "flex";
  }
  else//if viewports less than 720px wide
  {
    console.log('MODE MOBILE');
    share_pannel_obj.style.display = "none";
    share_pannel_mobile_obj.style.display = "none";
    author_pannel_obj.style.display = "flex";
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery)