/**
 *
 */

function getFilterArrayFromParamProps(paramsData) {
  if (!paramsData || !paramsData.props || typeof paramsData.props != 'object') return {};
  const res = [];
  const props = paramsData.props;
  Object.keys(paramsData.props).forEach(id => {
    if (props[id].did) res.push(props[id].did);
  });
  return res;
}

module.exports = {
  getFilterArrayFromParamProps
};
