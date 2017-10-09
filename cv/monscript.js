function masquer_div(id)
{
  if (document.getElementById(id).style.display == 'none')
  {
       document.getElementById(id).style.display = 'block';
  }
  else
  {
       document.getElementById(id).style.display = 'none';
  }
}

if (confirm('Voulez-vous vraiment voir ce CV')) {
    alert('Enjoy !');
}

else alert ("Bon t'es quand meme obligé !");