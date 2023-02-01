import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import './Table.css';
function Table ()
{

  function horizontalScroll ( event )
  {
    const delta = Math.max( -1, Math.min( 1, ( event.nativeEvent.wheelDelta || -event.nativeEvent.detail ) ) );
    event.currentTarget.scrollLeft -= ( delta * 10 );
    event.preventDefault();
  }
  return (
    <>
      <section className='table-section container-fluid py-5 my-md-4 my-0'>
        <h1 className='h1 text-center fw-bold'>Competitive Advantages Over All Other Rewards Coins</h1>
        <div className='table-responsive-xl pt-4' onKeyDown={horizontalScroll} >
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope='col' className='h5 cu table-head'>Features</th>
                <th scope='col' className='h5 cu table-head'>TRAVELERSE</th>
                <th scope='col' className='h5 cu table-head'>Titano</th>
                <th scope='col' className='h5 cu table-head'>Libero</th>
              </tr>

            </thead>
            <tbody>
              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>APY</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><GiReceiveMoney /></i>213,139%</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><GiReceiveMoney /></i>102,483.58%</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><GiReceiveMoney /></i>158,893.59%</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>Fees</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><GiReceiveMoney /></i>10%/20%</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><GiReceiveMoney /></i>13%/18%</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><GiReceiveMoney /></i>15%/25%</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>Anti-Whale 3-7% sales limit</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>
                  No</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>Real NFT usecase</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
                <td className='h5  text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>
                  No</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>Sustainable Chart Growth
                </td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>
                  No</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>
                  Insurance Fund
                </td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>
                  No</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>Auto-Liquidity
                </td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>Auto-Staking
                </td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>Anti-Crash Proof on Chart
                </td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>Rug-Proof: No Manual Adjusting
                </td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
              </tr>

              <tr className="table-active">
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><AiFillQuestionCircle /></i>Manual Token Buyback
                </td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><MdCancel /></i>No</td>
                <td className='h5 text-white table-h5'><i className='h5 me-2 cu'><BsCheckCircleFill /></i>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Table;