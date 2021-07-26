import React, { Component } from 'react';
import './Converter.css'

// import "../node_modules/bootstrap/dist/css/bootstrap.css";

class Converter extends Component {

    state = {
        // currencies: ['USD', 'AUD', 'SGD', 'PHP', 'EUR', 'PKR'],
        currencies: ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYN', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMK', 'ZMW', 'ZWL'],
        base: 'USD',
        amount: '',
        convertTo: '',
        result: '',
        date: '',

    }
    handleSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            result: null,
        },

            this.calculate
        )
    }


    handleInput = (e) => {
        this.setState({
            amount: e.target.value,
            result: null
        }
            , this.calculate

        );
    };


    calculate = () => {
        const amount = this.state.amount;
        if (amount === isNaN) {
            return;
        }
        else {
            fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=01dd2f6dc9f48931bdb75efe3317331e&format=1?base=${this.state.base}`)

                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const date = data.date;
                    const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
                    this.setState({
                        result, date
                    })
                })

        }
    }



    handleSwap = (e) => {
        const base = this.state.base;
        const convertTo = this.state.convertTo;
        e.preventDefault();
        this.setState({
            convertTo: base,
            base: convertTo,
            result: null,
        }, this.calculate


        );
    };
    render() {

        const { currencies, base, amount, convertTo, result, date } = this.state;

        return (
            <div className="about_me ">

                <div className="container">

                    <div className="card card-body ">
                        <h5>{amount} {base} is equal to</h5>
                        <h2>{result === null ? "calculating..." : result} {convertTo}</h2>
                        <p>As of {date}</p>
                        <div className="row ">
                            <div className=" col-sm-8">
                                <form className="form-inline mb-4">
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={this.handleInput}
                                        className="form-control form-control-lg mx-3" />

                                    <select
                                        name="base"
                                        value={base}
                                        onChange={this.handleSelect}
                                        className="form-control form-control-lg mx-3">
                                        {currencies.map(currency =>
                                            <option
                                                key={currency}
                                                value={currency}>
                                                {currency} </option>
                                        )}
                                    </select>
                                </form>
                                <form className="form-inline mb-4">
                                    <input
                                        disabled={true}
                                        value={result === null ? 'calculating...' : result}

                                        className="form-control form-control-lg mx-3" />
                                    <select
                                        name="convertTo"
                                        value={convertTo}
                                        onChange={this.handleSelect}

                                        className="form-control form-control-lg mx-3">
                                        {currencies.map(currency =>
                                            <option
                                                key={currency}
                                                value={currency}>
                                                {currency} </option>
                                        )}
                                    </select>
                                </form>
                            </div>
                            <div className="col-lg-2 align-self-center ">

                                <h1 onclick={this.handleSwap} className="swap">💱</h1>
                                {/* {<h5>let the foreign exchange market determine the exchange rate;
                                    let the market set the value of the exchange rate most of the time,
                                </h5>} */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default Converter;