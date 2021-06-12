import counter from "./counter";
import deleteCar from "./delete-car";
import generateCars from "./generate-cars";
import nextPage from "./next-page";
import prevPage from "./prev-page";
import selectCar from "./select-car";
import startEngine from "./start-engine";
import stopEngine from "./stop-engine";
const getCars = async () => {
    const garage: HTMLElement = document.querySelector('.garage_wrapper');
    const pages = await fetch(`http://127.0.0.1:3000/garage`);
    // const response = await fetch('http://127.0.0.1:3000/garage', {
    //     method: "GET"
    // });
    const response = await fetch(`http://127.0.0.1:3000/garage?_limit=7&_page=${counter.count}`, {
        method: "GET"
    });
    const pageData = await pages.json();
    const data = await response.json();
    console.log(data);
    garage.innerHTML = `<div class="garage_header">
        <div class="garage_text">GARAGE</div>
        <div class="garage_img__cover"><div class="garage_img"></div><div class="garage_counter">${pageData.length}</div></div></div><div class="garage_page">PAGE<div>${counter.count}</div></div><div class="pagination_btns"><div class="prev_btn">PREV</div><div class="next_btn">NEXT</div></div>`;
    for (let i = 0; i < data.length; i += 1) {
        garage.innerHTML += `<div class="garage_container">
            <div class="garage_unit"><div class="unit_btn__container"><div id="${data[i].id}" class="select_btn select_${data[i].id}">SELECT</div><div id="${data[i].id}"  class="remove_btn remove_${data[i].id}">REMOVE</div><div class="unit_name">${data[i].name}</div></div><div class="unit_cover"><div class="unit_engine"><div class="unit_start start_${data[i].id}" id="${data[i].id}" ></div><div class="unit_stop stop_${data[i].id}" id="${data[i].id}" ></div></div><div class="unit_race"><div class="unit_car single__car_${data[i].id}"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="99.369px" height="99.369px" viewBox="0 0 99.369 99.369" style="enable-background:new 0 0 99.369 99.369;" xml:space="preserve"><g><g><path d="M18.193,48.351c-4.106,0.166-7.299,3.622-7.133,7.727c0.014,0.316,0.049,0.627,0.102,0.934c0.608,3.645,3.84,6.354,7.624,6.199c3.892-0.155,6.958-3.271,7.13-7.09c0.008-0.21,0.015-0.423,0.006-0.635C25.757,51.38,22.296,48.185,18.193,48.351z M17.664,51.199l0.083,2.137c-0.231,0.071-0.444,0.173-0.646,0.302l-1.575-1.452C16.133,51.685,16.857,51.341,17.664,51.199z M14.657,53.13l1.576,1.455c-0.107,0.207-0.192,0.431-0.243,0.663l-2.135,0.087C13.932,54.521,14.211,53.77,14.657,53.13z M13.896,56.62l2.151-0.085c0.072,0.227,0.17,0.439,0.296,0.637l-1.459,1.578C14.393,58.149,14.043,57.421,13.896,56.62z M15.841,59.617l1.452-1.572c0.199,0.105,0.424,0.186,0.653,0.233l0.085,2.145C17.225,60.342,16.478,60.054,15.841,59.617z M23.078,54.966l-2.136,0.086c-0.068-0.23-0.17-0.443-0.297-0.644l1.456-1.578C22.595,53.435,22.935,54.161,23.078,54.966z M18.95,51.147c0.817,0.08,1.565,0.363,2.205,0.812l-1.452,1.573c-0.206-0.114-0.431-0.198-0.667-0.249L18.95,51.147z M19.318,60.371l-0.085-2.144c0.228-0.067,0.438-0.165,0.634-0.29l1.57,1.455C20.838,59.883,20.119,60.228,19.318,60.371z M22.326,58.456l-1.584-1.463c0.107-0.204,0.197-0.421,0.25-0.656l2.133-0.085C23.043,57.063,22.772,57.82,22.326,58.456z"/><path d="M75.478,46.602c-4.105,0.166-7.297,3.622-7.132,7.728c0.014,0.316,0.05,0.627,0.102,0.933c0.607,3.646,3.839,6.354,7.625,6.198c3.891-0.154,6.958-3.271,7.128-7.089c0.009-0.211,0.017-0.423,0.006-0.636C83.041,49.631,79.579,46.437,75.478,46.602z M74.948,49.45l0.083,2.138c-0.229,0.07-0.444,0.172-0.644,0.301l-1.576-1.451C73.415,49.936,74.143,49.591,74.948,49.45z M71.941,51.381l1.576,1.454c-0.108,0.209-0.192,0.432-0.243,0.665l-2.137,0.086C71.216,52.773,71.495,52.021,71.941,51.381z M71.182,54.871l2.15-0.085c0.072,0.227,0.169,0.439,0.294,0.636L72.169,57C71.678,56.402,71.328,55.673,71.182,54.871z M73.124,57.868l1.452-1.572c0.201,0.107,0.424,0.185,0.653,0.233l0.086,2.145C74.51,58.593,73.763,58.306,73.124,57.868z M80.362,53.216l-2.137,0.086c-0.068-0.229-0.168-0.441-0.296-0.642l1.456-1.579C79.878,51.686,80.219,52.411,80.362,53.216z M76.233,49.398c0.818,0.079,1.565,0.363,2.206,0.813l-1.452,1.572c-0.206-0.114-0.431-0.198-0.668-0.249L76.233,49.398z M76.604,58.622l-0.086-2.145c0.229-0.067,0.438-0.163,0.634-0.288l1.57,1.454C78.123,58.134,77.402,58.48,76.604,58.622z M79.609,56.707l-1.584-1.462c0.108-0.205,0.197-0.422,0.25-0.657l2.134-0.085C80.329,55.314,80.058,56.072,79.609,56.707z" /><path style="fill: ${data[i].color};" d="M99.28,49.513c-0.129-0.231-0.377-0.374-0.643-0.366l-1.142,0.035c0,0,0.575-2.848,0.772-4.308c0.02-0.15-0.027-0.302-0.129-0.415c-0.103-0.112-0.248-0.175-0.399-0.17c-3.79,0.117-20.193-3.427-25.316-7.248c-0.544-0.406-1.2-0.617-1.879-0.68c-3.873-0.36-11.7-0.166-14.925-0.064c-0.946,0.03-1.858,0.283-2.688,0.742c0,0-7.761,4.671-10.541,5.828c-4.696,1.955-15.758,1.387-18.822,1.205c-3.874-0.23-10.241-0.454-17.135,4.475c0,0-3.263,0.848-5.798,2.251c-0.369,0.205-0.608,0.583-0.634,1.004c-0.026,0.421,0.164,0.826,0.505,1.073c0.389,0.282,0.587,0.329,0.587,0.329l0.169,0.653c0.344,1.332,1.294,2.426,2.564,2.95l2.386,0.986c1.36,0.562,2.813,0.868,4.283,0.903c-0.178-0.484-0.313-0.987-0.398-1.513c-0.059-0.349-0.101-0.703-0.115-1.066c-0.092-2.271,0.706-4.444,2.249-6.115c1.541-1.67,3.643-2.64,5.915-2.731c4.73-0.144,8.665,3.521,8.852,8.167c0.009,0.241,0.002,0.481-0.008,0.723c-0.046,1.022-0.284,2.003-0.667,2.904l2.003,0.048l40.982,0.44c-0.979-1.142-1.665-2.55-1.927-4.117c-0.059-0.348-0.102-0.703-0.114-1.066c-0.093-2.271,0.707-4.444,2.248-6.114c1.542-1.671,3.643-2.641,5.916-2.731c4.73-0.145,8.664,3.521,8.852,8.166c0.009,0.241,0.001,0.481-0.008,0.722c-0.038,0.861-0.211,1.689-0.492,2.469l8.059-0.246c0.196-0.006,0.385-0.095,0.514-0.244l1.88-2.165l2.058-0.062c0.229-0.007,0.442-0.124,0.569-0.315l2.389-3.598C99.397,50.029,99.409,49.744,99.28,49.513z M65.217,42.352l-0.185,0.038c-0.575,0.118-1.085,0.446-1.432,0.922c-1.768,1.11-10.342,1.155-16.049,0.49l6.575-5.356c0.337-0.274,0.757-0.426,1.189-0.434l9.604-0.135c0.557-0.007,1.016,0.433,1.031,0.988l0.076,2.46C66.042,41.821,65.701,42.254,65.217,42.352z" /></g></g></svg></div><div class="unit_track"><div class="unit_flag"></div></div></div></div></div></div>`;
    }
    deleteCar()
    selectCar()
    nextPage()
    prevPage()
    startEngine()
    stopEngine()
    return 1
};

export default getCars