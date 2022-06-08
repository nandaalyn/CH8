import React, { useEffect, useState } from 'react';
import Car from '../../assets/img/image_car.png';
import User from '../../assets/icon/fi_users.png';
import Setting from '../../assets/icon/fi_settings.png';
import Calendar from '../../assets/icon/fi_calendar.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
    const { id } = useParams();
    const [dataDetail, setDataDetail] = useState([])

    useEffect(() => {
        handleDetail();
    }, [id])

    const handleDetail = async () =>{
        try {
          const res = await axios(
            `https://rent-car-appx.herokuapp.com/admin/car/${id}`
          );
        setDataDetail(res.data)
        } catch (error) {
        console.log(error);
        }
    }
    return (
      <section className="detail-page">
        <div className="row">
          <div className="col head"></div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              {/* Box Form */}
              <div className="box">
                <div className="row">
                  <div className="col">
                    <p><strong>Pencarianmu</strong></p>
                  </div>
                </div>
                <div className="row row-input">
                  <div className="col-auto">
                    <span>Tipe Driver</span>
                    <div className="input-group">
                      <select class="form-select" id="inputGroupSelect01" disabled>
                      </select>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>Tanggal</span>
                    <div className="input-group">
                      <input type="text" class="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>Waktu Jemput/Ambil</span>
                    <div className="input-group">
                      <select class="form-select" id="inputGroupSelect01" disabled>
                      </select>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>Jumlah Penumpang (optional)</span>
                    <div className="input-group">
                      <input type="number" className="form-control" disabled />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Box Form */}
              <div className="detail-section mt-4">
                <div className="row">
                  <div className="col-md-10">
                    <div className="row">
                      {/* Card Detail */}
                      <div className="col-md-8">
                        <div className="card card-detail">
                          <div className="card-title">
                            <p><strong>Tentang Paket</strong></p>
                          </div>
                          <div class="card-body">
                            <p>Include</p>
                            <ul>
                              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                              <li>Sudah termasuk bensin selama 12 jam</li>
                              <li>Sudah termasuk Tiket Wisata</li>
                              <li>sudah termasuk pajak</li>
                            </ul>
                            <p>Exclude</p>
                            <ul>
                              <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                            <p><strong>Refund, Reschedule, Overtime</strong></p>
                            <ul>
                              <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                              <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                              <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                            
                          </div>
                        </div>
                      </div>
                    {/* Card Detail */}
                      <div className="col-md-4">
                        <div class="card-detail-mobil">
                          <div class="card-body">
                            <h5 class="card-title d-flex justify-content-center">
                                <img width={300} src={dataDetail.image} alt="img-car" />
                            </h5>
                            <p><strong>{dataDetail.name}</strong></p>
                            <div className="icon d-flex">
                              <p class="card-text">
                                  <img className='me-1' src={User} alt="icon-key" />4 Orang
                              </p>
                              <p class="card-text">
                                  <img className='me-1' src={Setting} alt="icon-clock" />Manual
                              </p>
                              <p class="card-text">
                                  <img className='me-1' src={Calendar} alt="icon-clock" />Tahun 2020
                              </p>
                            </div>
                            <p>Total <span><strong>Rp.{dataDetail.price}</strong></span></p>
                            <button type="button" class="btn btn-lanjut">Lanjutkan Pembayaran
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
export default Detail