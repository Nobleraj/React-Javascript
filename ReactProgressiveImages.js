//How to load Progressive images in React
//set the browser network to slow3G

//Load blurry image initially and then load like this

useEffect(() => {
  let img = new Image();
  img.src = mainSrc;
  img.onLoad = () => {
    setSource(mainSrc);
  };
}, [mainSrc]);
