const loadingComponent = {
  loading() {
    const bar = document.createElement('div');

    bar.style.width = '0';
    bar.style.backgroundColor = 'royalblue';
    bar.style.height = '4px';
    bar.style.position = 'fixed';
    bar.style.top = '0';
    bar.style.left = '0';
    bar.style.zIndex = '999';
    bar.style.transition = '0.2s';

    document.body.append(bar);

    function update() {
      const postWrap = document.querySelector('.bar__container');
      const textHeight = postWrap.offsetHeight;
      const pagePosition = window.pageYOffset;
      // eslint-disable-next-line no-mixed-operators
      const updateBar = pagePosition * 150 / textHeight;

      bar.style.width = `${updateBar}%`;
    }

    window.addEventListener('load', () => {
      document.addEventListener('scroll', update);
    });
  },
};

export default loadingComponent;
