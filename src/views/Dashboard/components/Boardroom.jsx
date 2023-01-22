import { Button } from '@material-ui/core'
import React from 'react'
import BtcCard from './btcCard'
import TokenSymbol from '../../../components/TokenSymbol';
// import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import { getDisplayBalance } from '../../../utils/formatBalance';


const card = {
    upper: {
        backdropFilter: 'blur(2px) saturate(180%)',
        backgroundColor: 'rgba(35, 40, 75, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(114, 140, 223, 1)',
        padding: '1rem 2rem',
        color: 'white',
        flex: '2'
    },
    lower: {
        backdropFilter: 'blur(2px) saturate(180%)',
        backgroundColor: 'rgba(35, 40, 75, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(114, 140, 223, 1)',
        padding: '1rem 2rem',
        color: 'white',
        flex: '1'
    }
}

const Boardroom = () => {
    // const stakedBalance = useStakedBalanceOnBoardroom();
    const totalStaked = useTotalStakedOnBoardroom();

    return (
        <div style={{ display: 'flex', gap: '2rem', marginTop:'2rem', flexWrap:'wrap', justifyContent:'center' }}>
            <div>
                <div>
                    <div style={{textAlign:'right'}}>
                        <span><a href="https://docs.bomb.money/welcome-start-here/readme" style={{color:'rgba(158, 230, 255, 1)'}}>Read Investment Strategy</a></span>
                    </div>
                    <Button
                        variant='text' style={{ backgroundColor: 'rgba(0, 173, 232, 0.8)', color: 'black', width: '100%', margin: '.5rem 0', fontWeight: '600', textTransform: 'capitalize', fontSize: '1.1rem' }}> Invest Now </Button>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom:'1rem' }}>
                        <Button variant='text' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'black', width: '50%', fontWeight: '600', textTransform: 'capitalize', fontSize: '1.1rem' }}> Chat on Discord </Button>
                        <Button variant='text' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'black', width: '50%', fontWeight: '600', textTransform: 'capitalize', fontSize: '1.1rem' }}> Read Docs </Button>
                    </div>
                </div>
                <div style={card.upper}>
                    <BtcCard
                    title="Boardroom"
                    icon={<TokenSymbol symbol="BSHARE" size="50" />}    
                    subHead="Stake BSHARE and earn BOMB every epoch"
                    TVL=" $1008"
                    staked={Number(getDisplayBalance(totalStaked)).toFixed(2)}
                    dailyReturn="2"
                    yourStake=" 6.0000 "
                    stakeIcon={<TokenSymbol symbol="BSHARE" size="20" />}
                    Earned=" 1660.44"
                    earnedIcon ={<TokenSymbol symbol="BOMB" size="20" />}
                    align="end"
                    btnwrap="wrap"
                    width="13rem"
                     />
                </div>
            </div>
            <div style={card.lower}>
                <span>Latest News</span>
            </div>
        </div>
    )
}

export default Boardroom