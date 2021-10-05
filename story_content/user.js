function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6igjq0ie7za":
        Script1();
        break;
      case "5mB2cnjYfEl":
        Script2();
        break;
  }
}

function Script1()
{
  window.parent.parent.location.href = parent.parent.siteurl
}

function Script2()
{
  window.parent.parent.location.href = parent.parent.siteurl + "/chuyentiep.php?type=1&courseID=" + parent.parent.courseid+ "&scormID="+parent.parent.scoid + "&lessonID="+parent.parent.lessonid + "&ID="+parent.parent.id



}

