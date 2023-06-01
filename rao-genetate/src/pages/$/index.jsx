// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from 'react';

import {
  ChartCard,
  FAQS,
  LearnArticleList,
} from 'gate-lowcode-component/src/index.tsx';

import {
  Page as FDPage,
  Section as FDSection,
} from '@alifd/layout/lib/index.js';

import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';

import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';

import utils, { RefsManager } from '../../utils';

import * as __$$i18n from '../../i18n';

import __$$constants from '../../constants';

import './index.css';

class $$Page extends React.Component {
  _context = this;

  _dataSourceConfig = this._defineDataSourceConfig();
  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {
    runtimeConfig: true,
    requestHandlersMap: { fetch: __$$createFetchRequestHandler() },
  });

  get dataSourceMap() {
    return this._dataSourceEngine.dataSourceMap || {};
  }

  reloadDataSource = async () => {
    await this._dataSourceEngine.reloadDataSource();
  };

  get constants() {
    return __$$constants || {};
  }

  constructor(props, context) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    __$$i18n._inject2(this);

    this.state = { text: 'outer', isShowDialog: false };
  }

  $ = (refName) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName) => {
    return this._refsManager.getAll(refName);
  };

  _defineDataSourceConfig() {
    const _this = this;
    return {
      list: [
        {
          type: 'fetch',
          isInit: function () {
            return true;
          }.bind(_this),
          options: function () {
            return {
              params: {},
              method: 'GET',
              isCors: true,
              timeout: 5000,
              headers: {},
              uri: 'mock/info.json',
            };
          }.bind(_this),
          id: 'info',
          shouldFetch: function () {
            console.log('should fetch.....');
            return true;
          },
        },
      ],
    };
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  testFunc() {
    console.log('test func');
  }

  onClick() {
    this.setState({
      isShowDialog: true,
    });
  }

  closeDialog() {
    this.setState({
      isShowDialog: false,
    });
  }

  getHelloWorldText() {
    return this.i18n('i18n-jwg27yo4');
  }

  getHelloWorldText2() {
    return this.i18n('i18n-jwg27yo3', {
      name: '絮黎',
    });
  }

  onTestConstantsButtonClicked() {
    console.log('constants.ConstantA:', this.constants.ConstantA);
    console.log('constants.ConstantB:', this.constants.ConstantB);
  }

  onTestUtilsButtonClicked() {
    this.utils.demoUtil('param1', 'param2');
  }

  componentDidMount() {
    this._dataSourceEngine.reloadDataSource();

    console.log('did mount');
  }

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <div
        ref={this._refsManager.linkRef('outerView')}
        style={{ height: '100%' }}
      >
        <ChartCard
          data={[
            {
              title: lang_string(`Bitcoin (BTC) Price`),
              describe: lang_string_node(
                `The current price of Bitcoin (BTC) is $0$, which is also $1$ in the last 24 hours,  and $2$ in the past 7 days.  For more information, see <a href="/trade/BTC_USDT">Bitcoin price</a> now.`
              ),
              href: '/trade/BTC_USDT',
              buttonName: lang_string(`Trade BTC/USDT`),
              options: {
                tooltip: { trigger: 'none' },
                xAxis: [
                  {
                    data: [
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-08',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                      '05-09',
                    ],
                    axisLabel: { show: true, interval: 'auto' },
                  },
                ],
                yAxis: [
                  {
                    type: 'value',
                    min: '25975.38',
                    max: '29701.77',
                    splitNumber: 8,
                  },
                ],
                grid: {
                  top: '4%',
                  left: '1%',
                  right: 0,
                  bottom: 0,
                  containLabel: true,
                  show: 'true',
                  borderWidth: '0',
                },
                series: [
                  {
                    type: 'line',
                    showSymbol: false,
                    data: [
                      28219.3, 28287.4, 28201.5, 28130, 28262.7, 28174.9,
                      27982.9, 27717.5, 27916.5, 27939.1, 27933.8, 27769,
                      27852.4, 27968.1, 27888.7, 27865.6, 27525.5, 27475.2,
                      27342.5, 27536.9, 27542.5, 27654.2, 27666.7, 27576.3,
                      27699.7, 27641, 27624.5, 27606.6, 27544.8, 27473.8,
                    ],
                    itemStyle: {
                      normal: {
                        color: '#F23D3D',
                        lineStyle: { color: '#F23D3D' },
                      },
                    },
                  },
                ],
              },
            },
          ]}
        />
        <FAQS
          title={lang_string(`faq title`)}
          FaqList={[
            {
              title: lang_string(
                `Is GBTC a good investment, especially when it is trading at a discount to NAV?`
              ),
              contentList: [
                lang_string(
                  `GBTC shares do allow investors to have exposure to Bitcoin while bypassing certain challenges such as storage, security and insurance, as well as legal compliance in the case of US investors. However, steep discount to NAV also meant that GBTC shareholders are likely to be in the state of panic or fear. With recent attacks towards the Grayscale management, such added variable to the already volatile Bitcoin price movement may increase the risk for new investors to Bitcoin and cryptocurrencies.`
                ),
                lang_string(
                  `other GBTC shares do allow investors to have exposure to Bitcoin while bypassing certain challenges such as storage, security and insurance, as well as legal compliance in the case of US investors. However, steep discount to NAV also meant that GBTC shareholders are likely to be in the state of panic or fear. With recent attacks towards the Grayscale management, such added variable to the already volatile Bitcoin price movement may increase the risk for new investors to Bitcoin and cryptocurrencies.`
                ),
              ],
              isShow: true,
            },
            {
              title: lang_string(
                `How to choose between GBTC and spot Bitcoin?`
              ),
              contentList: [
                lang_string_node(
                  `As all GBTC does is holding Bitcoin via trust on behalf of the investors, GBTC can actually be considered a <a href="/learn/articles/how-to-choose-derivatives-that-suit-you/26">derivative</a> of Bitcoin. In saying so, the value of GBTC shares is derived from the NAV of the Bitcoins held, and comes without any intrinsic value of its own. GBTC shares are therefore vulnerable to market sentiment and risks, and is very much prone to supply and demand factors on top of spot Bitcoin price. This can pose more difficulties to investors as far as share valuation is concerned.`
                ),
              ],
              isShow: false,
            },
            {
              title: lang_string(
                `How to buy Bitcoin if it is decided that spot Bitcoin would be more appropriate?`
              ),
              contentList: [
                lang_string_node(
                  `You can buy Bitcoin by trading on the spot market via Gate.io, all you have to do is follow the steps on <a href="/how-to-buy/bitcoin-btc">how to buy BTC</a> once you have funded your account.`
                ),
              ],
              isShow: false,
            },
            {
              title: lang_string(
                `What is the price prediction of Bitcoin (BTC) in the future?`
              ),
              contentList: [
                lang_string_node(
                  `Investors tend to rely on <a href="learn/articles/what-is-fundamental-wnalysis/27">fundamental analysis</a> and <a href="/learn/articles/what-is-technical-analysis/25">technical analysis</a> in trying to predict the future price of Bitcoin. On this point, the <a href="/price-prediction/bitcoin-btc">BTC price prediction</a> may be helpful in your decision making process before making any investment decisions.`
                ),
              ],
              isShow: false,
            },
          ]}
          isDark={false}
          id=""
        />
        <LearnArticleList
          title={lang_string(`GBTC and Bitcoin Related Articles`)}
          learnArticleList={[
            {
              Images:
                'https://s3.ap-northeast-1.amazonaws.com/gimg.gateimg.com/learn/5311f319ec00017f591e5356feac8513efd1ff29.jpg',
              tit: lang_string(`Beginner`),
              color: 'green',
              subtitle: lang_string(`What is Bitcoin (BTC)?`),
              href: '/learn/articles/what-is-bitcoin/169',
            },
            {
              Images:
                'https://s3.ap-northeast-1.amazonaws.com/gimg.gateimg.com/learn/535631b61cb7269bb43a682e8e564a6423d9b6a5.jpg',
              tit: lang_string(`Beginner`),
              color: 'green',
              subtitle: lang_string(`What is a Bitcoin ETF?`),
              href: '/learn/articles/what-is-a-bitcoin-etf/218',
            },
            {
              Images:
                'https://s3.ap-northeast-1.amazonaws.com/gimg.gateimg.com/learn/73f83c02f95247e84a1e5e086046cf08eee538bc.jpg',
              tit: lang_string(`Beginner`),
              color: 'green',
              subtitle: lang_string(`What is Spot Trading?`),
              href: '/learn/articles/what-is-spot-trading/93',
            },
          ]}
        />
        <FDPage
          contentProps={{ style: { background: 'rgba(255,255,255,0)' } }}
          ref={this._refsManager.linkRef('fdpage-bb43fbb0')}
        >
          <FDSection
            style={{ backgroundColor: 'rgba(255,255,255,1)', minHeight: '' }}
          />
        </FDPage>
      </div>
    );
  }
}

export default $$Page;

function __$$eval(expr) {
  try {
    return expr();
  } catch (error) {}
}

function __$$evalArray(expr) {
  const res = __$$eval(expr);
  return Array.isArray(res) ? res : [];
}

function __$$createChildContext(oldContext, ext) {
  const childContext = {
    ...oldContext,
    ...ext,
  };
  childContext.__proto__ = oldContext;
  return childContext;
}
