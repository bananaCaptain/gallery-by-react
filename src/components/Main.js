//CSS
require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//图片
// let yeomanImage = require('../images/yeoman.png');

//json文件
var imageDatas = require('../data/imageDatas.json');

// 利用自执行函数,将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
  for (let i = 0; i < imageDatasArr.length; i++) {
    const singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      //具体内容
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
