import React from 'react'
import './index.css'

const SalesTable = () => {
  return (
    <React.Fragment>
      <div className="salesTable">
        <div className="salesTable__title">
          Ключевые показатели <span>эффективности</span>
        </div>
        <div className="container">
          <div className="salesTable__scroll">
            <table className="salesTable__table">
              <thead className="salesTable__table-thead">
                <tr className="salesTable__row">
                  <th />
                  <th colSpan={3}>
                    Итого: <span className="blue-text">Ноябрь</span>
                  </th>
                  <th colSpan={3}>Бригада Щекотовой</th>
                  <th colSpan={3}>Бригада Тишкина</th>
                  <th colSpan={3}>Бригада Разбегаева</th>
                  <th colSpan={3}>Бригада Чистякова</th>
                  <th colSpan={3}>Бригада Цыпышева</th>
                </tr>
                <tr className="salesTable__row">
                  <th />
                  <th>план шт</th>
                  <th>факт шт</th>
                  <th>%</th>
                  <th>план</th>
                  <th>факт</th>
                  <th>%</th>
                  <th>план</th>
                  <th>факт</th>
                  <th>%</th>
                  <th>план</th>
                  <th>факт</th>
                  <th>%</th>
                  <th>план</th>
                  <th>факт</th>
                  <th>%</th>
                  <th>план</th>
                  <th>факт</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody className="salesTable__table-tbody">
                <tr>
                  <td className="title-block">Созданные заявки</td>
                  <td>4575</td>
                  <td>5044</td>
                  <td>
                    <span className="green-text">100</span>
                  </td>
                  <td>915</td>
                  <td>971</td>
                  <td>
                    <span className="green-text">106</span>
                  </td>
                  <td>915</td>
                  <td>843</td>
                  <td>
                    <span className="red-text">92</span>
                  </td>
                  <td>915</td>
                  <td>1089</td>
                  <td>
                    <span className="green-text">119</span>
                  </td>
                  <td>915</td>
                  <td>937</td>
                  <td>
                    <span className="green-text">102</span>
                  </td>
                  <td>915</td>
                  <td>1204</td>
                  <td>
                    <span className="green-text">132</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Основные услуги, шт</td>
                  <td>4300</td>
                  <td>4713</td>
                  <td>
                    <span className="green-text">110</span>
                  </td>
                  <td>860</td>
                  <td>910</td>
                  <td>
                    <span className="green-text">106</span>
                  </td>
                  <td>860</td>
                  <td>787</td>
                  <td>
                    <span className="red-text">92</span>
                  </td>
                  <td>860</td>
                  <td>1018</td>
                  <td>
                    <span className="green-text">118</span>
                  </td>
                  <td>860</td>
                  <td>877</td>
                  <td>
                    <span className="green-text">102</span>
                  </td>
                  <td>860</td>
                  <td>1121</td>
                  <td>
                    <span className="green-text">130</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок ШПД</td>
                  <td>1000</td>
                  <td>1270</td>
                  <td>
                    <span className="green-text">127</span>
                  </td>
                  <td>200</td>
                  <td>231</td>
                  <td>
                    <span className="green-text">116</span>
                  </td>
                  <td>200</td>
                  <td>159</td>
                  <td>
                    <span className="red-text">80</span>
                  </td>
                  <td>200</td>
                  <td>458</td>
                  <td>
                    <span className="green-text">229</span>
                  </td>
                  <td>200</td>
                  <td>166</td>
                  <td>
                    <span className="red-text">83</span>
                  </td>
                  <td>200</td>
                  <td>256</td>
                  <td>
                    <span className="green-text">128</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок ТВ</td>
                  <td>3250</td>
                  <td>3337</td>
                  <td>
                    <span className="green-text">103</span>
                  </td>
                  <td>650</td>
                  <td>652</td>
                  <td>
                    <span className="green-text">100</span>
                  </td>
                  <td>650</td>
                  <td>597</td>
                  <td>
                    <span className="red-text">92</span>
                  </td>
                  <td>650</td>
                  <td>546</td>
                  <td>
                    <span className="red-text">84</span>
                  </td>
                  <td>650</td>
                  <td>692</td>
                  <td>
                    <span className="green-text">106</span>
                  </td>
                  <td>650</td>
                  <td>850</td>
                  <td>
                    <span className="green-text">131</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок ОТА</td>
                  <td>50</td>
                  <td>106</td>
                  <td>
                    <span className="green-text">212</span>
                  </td>
                  <td>10</td>
                  <td>27</td>
                  <td>
                    <span className="green-text">270</span>
                  </td>
                  <td>10</td>
                  <td>31</td>
                  <td>
                    <span className="green-text">310</span>
                  </td>
                  <td>10</td>
                  <td>14</td>
                  <td>
                    <span className="green-text">140</span>
                  </td>
                  <td>10</td>
                  <td>19</td>
                  <td>
                    <span className="green-text">190</span>
                  </td>
                  <td>10</td>
                  <td>15</td>
                  <td>
                    <span className="green-text">150</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td className="title-block">Дополнительные услуги</td>
                  <td>275</td>
                  <td>331</td>
                  <td>
                    <span className="green-text">120</span>
                  </td>
                  <td>55</td>
                  <td>61</td>
                  <td>
                    <span className="green-text">111</span>
                  </td>
                  <td>55</td>
                  <td>56</td>
                  <td>
                    <span className="green-text">102</span>
                  </td>
                  <td>55</td>
                  <td>71</td>
                  <td>
                    <span className="green-text">129</span>
                  </td>
                  <td>55</td>
                  <td>60</td>
                  <td>
                    <span className="green-text">109</span>
                  </td>
                  <td>55</td>
                  <td>83</td>
                  <td>
                    <span className="green-text">151</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок МВНО</td>
                  <td>75</td>
                  <td>88</td>
                  <td>
                    <span className="green-text">117</span>
                  </td>
                  <td>15</td>
                  <td>17</td>
                  <td>
                    <span className="green-text">113</span>
                  </td>
                  <td>15</td>
                  <td>13</td>
                  <td>
                    <span className="red-text">87</span>
                  </td>
                  <td>15</td>
                  <td>17</td>
                  <td>
                    <span className="green-text">113</span>
                  </td>
                  <td>15</td>
                  <td>11</td>
                  <td>
                    <span className="red-text">73</span>
                  </td>
                  <td>15</td>
                  <td>30</td>
                  <td>
                    <span className="green-text">200</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок ВН</td>
                  <td>75</td>
                  <td>90</td>
                  <td>
                    <span className="green-text">120</span>
                  </td>
                  <td>15</td>
                  <td>13</td>
                  <td>
                    <span className="red-text">87</span>
                  </td>
                  <td>15</td>
                  <td>11</td>
                  <td>
                    <span className="red-text">73</span>
                  </td>
                  <td>15</td>
                  <td>22</td>
                  <td>
                    <span className="green-text">147</span>
                  </td>
                  <td>15</td>
                  <td>27</td>
                  <td>
                    <span className="green-text">180</span>
                  </td>
                  <td>15</td>
                  <td>17</td>
                  <td>
                    <span className="green-text">113</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок УД</td>
                  <td>35</td>
                  <td>37</td>
                  <td>
                    <span className="green-text">106</span>
                  </td>
                  <td>7</td>
                  <td>10</td>
                  <td>
                    <span className="green-text">143</span>
                  </td>
                  <td>7</td>
                  <td>7</td>
                  <td>
                    <span className="green-text">100</span>
                  </td>
                  <td>7</td>
                  <td>13</td>
                  <td>
                    <span className="green-text">186</span>
                  </td>
                  <td>7</td>
                  <td>5</td>
                  <td>
                    <span className="red-text">71</span>
                  </td>
                  <td>7</td>
                  <td>2</td>
                  <td>
                    <span className="red-text">29</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок Миграция</td>
                  <td>25</td>
                  <td>37</td>
                  <td>
                    <span className="green-text">148</span>
                  </td>
                  <td>5</td>
                  <td>3</td>
                  <td>
                    <span className="red-text">60</span>
                  </td>
                  <td>5</td>
                  <td>11</td>
                  <td>
                    <span className="green-text">220</span>
                  </td>
                  <td>5</td>
                  <td>4</td>
                  <td>
                    <span className="red-text">80</span>
                  </td>
                  <td>5</td>
                  <td>6</td>
                  <td>
                    <span className="green-text">120</span>
                  </td>
                  <td>5</td>
                  <td>13</td>
                  <td>
                    <span className="green-text">260</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок Доп. Оборудование</td>
                  <td>65</td>
                  <td>79</td>
                  <td>
                    <span className="green-text">122</span>
                  </td>
                  <td>13</td>
                  <td>18</td>
                  <td>
                    <span className="green-text">138</span>
                  </td>
                  <td>13</td>
                  <td>14</td>
                  <td>
                    <span className="green-text">108</span>
                  </td>
                  <td>13</td>
                  <td>15</td>
                  <td>
                    <span className="green-text">115</span>
                  </td>
                  <td>13</td>
                  <td>11</td>
                  <td>
                    <span className="red-text">85</span>
                  </td>
                  <td>13</td>
                  <td>21</td>
                  <td>
                    <span className="green-text">162</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td className="title-block">Подключенные услуги</td>
                  <td>2770</td>
                  <td>3180</td>
                  <td>
                    <span className="green-text">115</span>
                  </td>
                  <td>554</td>
                  <td>632</td>
                  <td>
                    <span className="green-text">114</span>
                  </td>
                  <td>554</td>
                  <td>531</td>
                  <td>
                    <span className="red-text">96</span>
                  </td>
                  <td>554</td>
                  <td>701</td>
                  <td>
                    <span className="green-text">126</span>
                  </td>
                  <td>554</td>
                  <td>555</td>
                  <td>
                    <span className="green-text">100</span>
                  </td>
                  <td>554</td>
                  <td>722</td>
                  <td>
                    <span className="green-text">130</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td className="title-block">Основные услуги</td>
                  <td>2650</td>
                  <td>3003</td>
                  <td>
                    <span className="green-text">113</span>
                  </td>
                  <td>530</td>
                  <td>601</td>
                  <td>
                    <span className="green-text">113</span>
                  </td>
                  <td>530</td>
                  <td>496</td>
                  <td>
                    <span className="red-text">94</span>
                  </td>
                  <td>530</td>
                  <td>662</td>
                  <td>
                    <span className="green-text">125</span>
                  </td>
                  <td>530</td>
                  <td>526</td>
                  <td>
                    <span className="red-text">99</span>
                  </td>
                  <td>530</td>
                  <td>684</td>
                  <td>
                    <span className="green-text">129</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок ШПД</td>
                  <td>700</td>
                  <td>838</td>
                  <td>
                    <span className="green-text">120</span>
                  </td>
                  <td>140</td>
                  <td>152</td>
                  <td>
                    <span className="green-text">109</span>
                  </td>
                  <td>140</td>
                  <td>100</td>
                  <td>
                    <span className="red-text">72</span>
                  </td>
                  <td>140</td>
                  <td>298</td>
                  <td>
                    <span className="green-text">213</span>
                  </td>
                  <td>140</td>
                  <td>100</td>
                  <td>
                    <span className="red-text">71</span>
                  </td>
                  <td>140</td>
                  <td>156</td>
                  <td>
                    <span className="green-text">112</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок ТВ</td>
                  <td>1900</td>
                  <td>2095</td>
                  <td>
                    <span className="green-text">110</span>
                  </td>
                  <td>380</td>
                  <td>430</td>
                  <td>
                    <span className="green-text">113</span>
                  </td>
                  <td>380</td>
                  <td>376</td>
                  <td>
                    <span className="red-text">99</span>
                  </td>
                  <td>380</td>
                  <td>355</td>
                  <td>
                    <span className="red-text">93</span>
                  </td>
                  <td>380</td>
                  <td>415</td>
                  <td>
                    <span className="green-text">109</span>
                  </td>
                  <td>380</td>
                  <td>519</td>
                  <td>
                    <span className="green-text">136</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок ОТА</td>
                  <td>50</td>
                  <td>70</td>
                  <td>
                    <span className="green-text">140</span>
                  </td>
                  <td>10</td>
                  <td>18</td>
                  <td>
                    <span className="green-text">178</span>
                  </td>
                  <td>10</td>
                  <td>20</td>
                  <td>
                    <span className="green-text">195</span>
                  </td>
                  <td>10</td>
                  <td>9</td>
                  <td>
                    <span className="red-text">91</span>
                  </td>
                  <td>10</td>
                  <td>11</td>
                  <td>
                    <span className="green-text">114</span>
                  </td>
                  <td>10</td>
                  <td>9</td>
                  <td>
                    <span className="red-text">92</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td className="title-block">Дополнительные услуги</td>
                  <td>120</td>
                  <td>177</td>
                  <td>
                    <span className="green-text">147</span>
                  </td>
                  <td>24</td>
                  <td>31</td>
                  <td>
                    <span className="green-text">129</span>
                  </td>
                  <td>24</td>
                  <td>35</td>
                  <td>
                    <span className="green-text">147</span>
                  </td>
                  <td>24</td>
                  <td>39</td>
                  <td>
                    <span className="green-text">162</span>
                  </td>
                  <td>24</td>
                  <td>29</td>
                  <td>
                    <span className="green-text">120</span>
                  </td>
                  <td>24</td>
                  <td>38</td>
                  <td>
                    <span className="green-text">160</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок МВНО</td>
                  <td>15</td>
                  <td>34</td>
                  <td>
                    <span className="green-text">226</span>
                  </td>
                  <td>3</td>
                  <td>2</td>
                  <td>
                    <span className="red-text">67</span>
                  </td>
                  <td>3</td>
                  <td>8</td>
                  <td>
                    <span className="green-text">273</span>
                  </td>
                  <td>3</td>
                  <td>11</td>
                  <td>
                    <span className="green-text">368</span>
                  </td>
                  <td>3</td>
                  <td>7</td>
                  <td>
                    <span className="green-text">220</span>
                  </td>
                  <td>3</td>
                  <td>6</td>
                  <td>
                    <span className="green-text">200</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок ВН</td>
                  <td>25</td>
                  <td>42</td>
                  <td>
                    <span className="green-text">168</span>
                  </td>
                  <td>5</td>
                  <td>9</td>
                  <td>
                    <span className="green-text">172</span>
                  </td>
                  <td>5</td>
                  <td>7</td>
                  <td>
                    <span className="green-text">139</span>
                  </td>
                  <td>5</td>
                  <td>7</td>
                  <td>
                    <span className="green-text">140</span>
                  </td>
                  <td>5</td>
                  <td>9</td>
                  <td>
                    <span className="green-text">180</span>
                  </td>
                  <td>5</td>
                  <td>10</td>
                  <td>
                    <span className="green-text">207</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок УД</td>
                  <td>25</td>
                  <td>24</td>
                  <td>
                    <span className="red-text">98</span>
                  </td>
                  <td>5</td>
                  <td>7</td>
                  <td>
                    <span className="green-text">132</span>
                  </td>
                  <td>5</td>
                  <td>4</td>
                  <td>
                    <span className="red-text">88</span>
                  </td>
                  <td>5</td>
                  <td>8</td>
                  <td>
                    <span className="green-text">169</span>
                  </td>
                  <td>5</td>
                  <td>3</td>
                  <td>
                    <span className="red-text">60</span>
                  </td>
                  <td>5</td>
                  <td>1</td>
                  <td>
                    <span className="red-text">24</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок Миграция</td>
                  <td>25</td>
                  <td>24</td>
                  <td>
                    <span className="red-text">98</span>
                  </td>
                  <td>5</td>
                  <td>2</td>
                  <td>
                    <span className="red-text">40</span>
                  </td>
                  <td>5</td>
                  <td>7</td>
                  <td>
                    <span className="green-text">139</span>
                  </td>
                  <td>5</td>
                  <td>3</td>
                  <td>
                    <span className="red-text">52</span>
                  </td>
                  <td>5</td>
                  <td>4</td>
                  <td>
                    <span className="red-text">72</span>
                  </td>
                  <td>5</td>
                  <td>8</td>
                  <td>
                    <span className="green-text">159</span>
                  </td>
                </tr>
                <tr className="salesTable__row">
                  <td>Кол-во созданных заявок Доп. Оборудование</td>
                  <td>30</td>
                  <td>52</td>
                  <td>
                    <span className="green-text">174</span>
                  </td>
                  <td>6</td>
                  <td>12</td>
                  <td>
                    <span className="green-text">198</span>
                  </td>
                  <td>6</td>
                  <td>9</td>
                  <td>
                    <span className="green-text">147</span>
                  </td>
                  <td>6</td>
                  <td>10</td>
                  <td>
                    <span className="green-text">163</span>
                  </td>
                  <td>6</td>
                  <td>7</td>
                  <td>
                    <span className="green-text">110</span>
                  </td>
                  <td>6</td>
                  <td>13</td>
                  <td>
                    <span className="green-text">214</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="salesTable__scroll salesTable_margin">
            <table className="salesTable__table">
              <tbody className="salesTable__table-tbody">
                <tr className="salesTable__row">
                  <td className="title-block">
                    Конвертация из обработанных контактов в созданные заявки (К
                    заявки)
                  </td>
                  <td>2,80%</td>
                  <td>3,10%</td>
                  <td>2,73%</td>
                  <td>2,95%</td>
                  <td>1,70%</td>
                  <td>1,86%</td>
                </tr>
                <tr className="salesTable__row">
                  <td className="title-block">
                    Конвертация из заявок в подключенные услуги (К общая)
                  </td>
                  <td>63,04%</td>
                  <td>65,05%</td>
                  <td>63,00%</td>
                  <td>64,33%</td>
                  <td>59,23%</td>
                  <td>59,98%</td>
                </tr>
                <tr className="salesTable__row">
                  <td className="title-block">
                    Конвертация из заявок в подключенные услуги ВН (К ВН)
                  </td>
                  <td>62,90%</td>
                  <td>66,00%</td>
                  <td>63,00%</td>
                  <td>31,82%</td>
                  <td>33,33%</td>
                  <td>61,00%</td>
                </tr>
                <tr className="salesTable__row">
                  <td className="title-block">
                    Конвертация из заявок в подключенные услуги УД (К УД)
                  </td>
                  <td>55,70%</td>
                  <td>66,00%</td>
                  <td>63,00%</td>
                  <td>65,00%</td>
                  <td>60,00%</td>
                  <td>61,00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SalesTable
