// ==SE_module==
// name: toasts
// displayName: Toasts
// description: Shows various toast messages
// version: 1.0
// author: John Doe
// ==/SE_module==

module.onSnapMainActivityCreate = activity => {
    shortToast("TEST 1")
}

module.onSnapApplicationLoad = context => {
    shortToast("TEST 2")
}

module.onSnapEnhanceLoad = context => {
    shortToast("TEST 3")
}

module.onUnload = () => {
    shortToast("TEST 4")
}
