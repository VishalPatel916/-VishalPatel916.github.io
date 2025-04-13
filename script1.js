// it is for that view is ready whole page is loaded
window.addEventListener('load', () => {
    console.log(`"Page View" - ${new Date().toLocaleString()} - URL: ${window.location.href}`);
  });
  let count=0;
  // when we click some part on page it gives information about that 
  document.addEventListener('click', function (e) {
    count++;
    const clickedElement = e.target;
    const tag = clickedElement.tagName;
    const classes = clickedElement.className || 'no-class';
    const id = clickedElement.id || 'no-id';
    const text = clickedElement.innerText.trim().slice(0, 30) || 'no-text';
    console.log(`${count} )"Click Event" - ${new Date().toLocaleString()}`);
    console.log(` Tag: <${tag.toLowerCase()}>`);
    console.log(` ID: ${id}`);
    console.log(` Class: ${classes}`);
    console.log(` Text: "${text}"`);
  });
  function analyzeText() {
    const text = document.getElementById('inputText').value;
  
    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const words = (text.match(/\b\w+\b/g) || []).length;
    const spaces = (text.match(/ /g) || []).length;
    const newlines = (text.match(/\n/g) || []).length;
    const specialSymbols = (text.match(/[^a-zA-Z0-9 \n]/g) || []).length;
  
    const tokens = text.toLowerCase().match(/\b\w+\b/g) || [];
  
    const pronouns = [
        'i', 'you', 'he', 'she', 'it', 'we', 'they', 
        'me', 'him', 'her', 'us', 'them', 
        'my', 'your', 'his', 'its', 'our', 'their', 
        'who', 'whom', 'whose', 'which', 'what', 
        'this', 'that', 'these', 'those', 
        'myself', 'yourself', 'himself', 'herself', 
        'itself', 'ourselves', 'yourselves', 'themselves', 
        'mine', 'yours', 'hers', 'ours', 'theirs', 
        'anyone', 'everyone', 'someone', 
        'nothing', 'something', 'anything', 'everything', 
        'nobody', 'everybody', 'somebody', 'anybody',
        'whoever', 'whomever', 'whatever', 'whichever', 
        'none', 'neither', 'either', 'one', 
        'few', 'many', 'several', 'most', 'all', 'enough', 
        'more', 'less', 'little', 'much', 
        'other', 'another', 'both', 'each', 'fewer'
      ];
      const prepositions = [
        'in', 'on', 'at', 'by', 'with', 'about', 'against', 'between', 'into', 
        'through', 'during', 'before', 'after', 'above', 'below', 
        'to', 'from', 'up', 'down', 'off', 'over', 'under', 
        'of', 'for', 'as', 'like', 'since', 'until', 
        'along', 'around', 'among', 'across', 
        'behind', 'beside', 'beyond', 'near', 'opposite', 'outside', 'inside', 
        'toward', 'towards', 'without', 'within', 
        'despite', 'except', 'concerning', 'regarding', 'besides', 
        'throughout', 'past', 'unto', 'upon', 'via', 'versus', 
        'amongst', 'amid', 'amidst',
        'per', 'circa', 'bar', 'minus', 'notwithstanding', 
        'save', 'pace'
      ];
      const indefiniteArticles = [
        'a', 'an', 'some', 
        'any', 'no', 'every'
      ];
    const countItems = (list) => {
      const counts = {};
      for (const item of list) counts[item] = 0;
      for (const token of tokens) {
        if (list.includes(token)) counts[token]++;
      }
      return counts;
    };
  
    const pronounCounts = countItems(pronouns);
    const prepositionCounts = countItems(prepositions);
    const articleCounts = countItems(indefiniteArticles);
  
    let result = `Text Statistics : \n`;
    result += `    Letters: ${letters}\n    Words: ${words}\n    Spaces: ${spaces}\n    Newlines: ${newlines}\n    Special Symbols: ${specialSymbols}\n\n`;
  
    result += `Pronouns :\n`;
    for (const [word, count] of Object.entries(pronounCounts)) {
      if (count > 0) result += `    ${word}: ${count}\n`;
    }
  
    result += `Prepositions :\n`;
    for (const [word, count] of Object.entries(prepositionCounts)) {
      if (count > 0) result += `    ${word}: ${count}\n`;
    }
  
    result += `Indefinite Articles :\n`;
    for (const [word, count] of Object.entries(articleCounts)) {
      if (count > 0) result += `    ${word}: ${count}\n`;
    }
  
    document.getElementById('output').textContent = result;
  }
  
//   document.addEventListener('mouseover' ,function(e){
//     const clickedElement=e.target;
//     const tag = clickedElement.tagName;
//     console.log(`[Mouse over Event] - ${new Date().toLocaleString()}`);
//     console.log(` Tag: <${tag.toLowerCase()}>`);
//   } );