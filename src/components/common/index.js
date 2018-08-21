import Reactotron from 'reactotron-react-native'

export const getStatusName = (status) => {
    if (status === '') {
        return 'online';
    } else {
        var nowDate = new Date();
        var nowDateUTC = new Date(nowDate.toUTCString());

        var nowMl = nowDateUTC.getTime();
        var statusMl = new Date(status).getTime();

        var difference = nowMl - statusMl;
        var s = 's';
        if (difference < 60000) {
            return 'last seen just now';
        }
        if (difference < 3600000) { // less then 1 hour
            minutes = Math.round(difference / 60000); //minutes
            if (minutes === 1) s = '';
            return 'last seen ' + minutes + ' minute' + s + ' ago';
        }
        if ((difference >= 3600000) && (difference < 86400000)) {
            hours = Math.round(difference / 3600000);
            if (hours === 1) s = '';
            return 'last seen ' + hours + ' hour' + s + ' ago';
        }
        if (difference >= 86400000) {
            days = Math.round(difference / 86400000);
            if (days === 1) s = '';
            return 'last seen ' + days + ' day' + s + ' ago';
        }
    }
}

export const getMessageTextStatus = (status) => {
    if (status === 0) return 'created';
    if (status === 1) return 'sent';
    if (status === 2) return 'delivered';
    if (status === 3) return 'seen';
}

export const getMessageTime = (datetime) => {
    var localDate = new Date(datetime);
    var hours = localDate.getHours();
    var minutes = localDate.getMinutes();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    return hours + ':' + minutes;
}

export const getMessageDate = (datetime) => {
    var now = new Date();
    var localDate = new Date(datetime);
    var nowTime = now.getTime();
    var localDateTime = localDate.getTime();

    var difference = nowTime - localDateTime;
    if (difference < 60000) {
        // < 1 min
        return 'just now';
    }
    if (difference < 86400000) {
        // < 1 day
        return getMessageTime(datetime);
    }
    if (difference < 172800000) {
        return 'yesterday';
    }
    if (difference < 259200000) {
        var day = localDate.getDate();
        var month = localDate.getMonth() + 1;
        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        return month + '/' + day;
    }
}

export const getNameByPhone = (contacts, phoneNumber) => {
    const contactExist = contacts.find(item => {
        const phone = item.phoneNumbers.find(number => number === phoneNumber);
        if (phone) {
            return item;
        }
    });
    if (contactExist) {
        var gn = ''; var fn = '';
        if (contactExist.givenName) gn = contactExist.givenName;
        if (contactExist.familyName) fn = contactExist.familyName;
        return '' + gn + ' ' + fn;
    } else {
        return phoneNumber;
    }
}

export const getFirstLetterByName = (name) => {
    return name[0].toUpperCase();
}