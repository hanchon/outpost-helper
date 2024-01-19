export const STAKE_ACTION = "LiquidStake";
export function GenerateStrideMemo(sender, receiver, action = STAKE_ACTION) {
    if (action != STAKE_ACTION) {
        throw new TypeError(`${STAKE_ACTION} is the only supported action`);
    }
    const validSender = sender.startsWith("evmos1") && sender.length == 44;
    if (!validSender) {
        throw new TypeError("sender can only be a bech32 evmos wallet");
    }
    const validReceiver = receiver.startsWith("stride1") && receiver.length == 45;
    if (!validReceiver) {
        throw new TypeError("receiver can only be a bech32 stride wallet");
    }
    const msg = {
        autopilot: {
            receiver: receiver,
            stakeibc: {
                ibc_receiver: sender,
                action: action,
            },
        },
    };
    return JSON.stringify(msg);
}
//# sourceMappingURL=stride.js.map