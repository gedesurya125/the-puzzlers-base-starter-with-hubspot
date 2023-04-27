/* eslint-disable no-useless-escape */
export const convertApiHtmlText = (htmlText) => {
  // replace the </p><p> tag with <br/>
  const replacedPasByPTag = htmlText.replace(/\<\/p\>\<p\>/g, '<br/>');

  // remove the p tag
  const removedFrontPTag = replacedPasByPTag.replace(/\<p\>/g, '');
  const removedBackPTag = removedFrontPTag.replace(/\<\/p\>/g, '');

  // change strong tag to be span tag
  const switchedStrongTag = removedBackPTag.replace(/strong/g, 'span');

  return switchedStrongTag;
};
