$(document).ready(function () {
    var choicesModal = document.getElementById('mainDialog');
    choicesModal.addEventListener('hide.bs.modal', function (event) {
        // Prevent the modal from closing
        event.preventDefault();
    });
    $('#mainDialog').modal('toggle')
})


$('.scholarship-btn').click(function () {
    let selected_form = localStorage.getItem('selected_form')
    let cebucity_checkbox = $('#cebucity_checkbox').is(':checked')
    let bmp_checkbox = $('#bmp_checkbox').is(':checked')
    let dole_checkbox = $('#dole_checkbox').is(':checked')
    let free_tuition_fee_checkbox = $('#free_tuition_fee_checkbox').is(':checked')
    let subsidized_checkbox = $('#subsidized_checkbox').is(':checked')
    let special_package_checkbox = $('#special_package_checkbox').is(':checked')

    localStorage.setItem('cebucity_checkbox', cebucity_checkbox ? 1 : 0)
    localStorage.setItem('bmp_checkbox', bmp_checkbox ? 1 : 0)
    localStorage.setItem('dole_checkbox', dole_checkbox ? 1 : 0)
    localStorage.setItem('free_tuition_fee_checkbox', free_tuition_fee_checkbox ? 1 : 0)
    localStorage.setItem('subsidized_checkbox', subsidized_checkbox ? 1 : 0)
    localStorage.setItem('special_package_checkbox', special_package_checkbox ? 1 : 0)

    location.replace('home/'+selected_form)

    console.log(selected_form)
})

$('.jhsappform').submit(function (e) {
    e.preventDefault()
    const self = $(this)
    const data = new FormData(self[0])
    data.append('bmp', localStorage.getItem('bmp_checkbox'))
    data.append('ccs', localStorage.getItem('cebucity_checkbox'))
    data.append('dole', localStorage.getItem('dole_checkbox'))
    data.append('free_tuition_fee', localStorage.getItem('free_tuition_fee_checkbox'))
    data.append('subsidized', localStorage.getItem('subsidized_checkbox'))
    data.append('special', localStorage.getItem('special_package_checkbox'))

    const currentDate = new Date();
    const schoolyear = currentDate.getFullYear();
    data.append('school_year', schoolyear)

    console.log(data)
    ajax(data, 'cebucity/SubmitApplication').then(res => {
        self[0].reset()
        alert(res.message)
        resetStorage()
    })

})

$('.collegeappform').submit(function (e) {
    e.preventDefault()
    const self = $(this)
    const data = new FormData(self[0])
    data.append('bmp', localStorage.getItem('bmp_checkbox'))
    data.append('ccs', localStorage.getItem('cebucity_checkbox'))
    data.append('dole', localStorage.getItem('dole_checkbox'))
    data.append('free_tuition_fee', localStorage.getItem('free_tuition_fee_checkbox'))
    data.append('subsidized', localStorage.getItem('subsidized_checkbox'))
    data.append('special', localStorage.getItem('special_package_checkbox'))

    const currentDate = new Date();
    const schoolyear = currentDate.getFullYear();
    data.append('school_year', schoolyear)

    console.log(data)
    ajax(data, 'cebucity/SubmitApplication').then(res => {
        self[0].reset()
        alert(res.message)
        resetStorage()
    })

})

$('.modal_close').click(function () {
   location.reload()
})



$('.main-form').submit(function (e) {
    e.preventDefault()
    const self = $(this)
    const data = self.serializeArray()

    if (data[0].value == 1) {
        $('.ocakes-title').html('')
        $('.ocakes-title').html('applying for junior high school scholarship')
        $('.q1-title').html('')
        $('.q1-title').html('1. Are you graduated in elementary school?')
        $('.q7-title').html('')
        $('.q7-title').html('7. Did you finish elementary in provincial school?')
        $('#jhsModal').modal('toggle')
        localStorage.setItem('selected_form', 'jhs')
    } else if (data[0].value == 2) {
        $('.ocakes-title').html('')
        $('.ocakes-title').html('applying for senior high school scholarship')
        $('.q1-title').html('')
        $('.q1-title').html('1. Are you graduated in junior high school from public school?')
        $('.q7-title').html('')
        $('.q7-title').html('7. Did you finish junior high school in provincial school?')
        localStorage.setItem('selected_form', 'shs')
        $('#jhsModal').modal('toggle')
    } else {
        localStorage.setItem('selected_form', 'college')
        $('#collegeModal').modal('toggle')
    }

    console.log(data[0].value)
})

$('.loginform').submit(function (e) {
    e.preventDefault()
    const email = $('#email').val()
    const pw = $('#password').val()

    if (email == 'admin@gmail.com') {
        if (pw == 'admin123') {
            location.replace('SchoolYear')
        } else {
            alert('Wrong password')
        }
    } else {
        alert('Incorrect email')
    }

})

$(document).on('click', '.mark-as-done', function () {
    const data = new FormData()
    data.append('id', $(this).data('id'))

    ajax(data, 'admin/UpdateStatus').then(res => {
        if (confirm(res.message) || confirm(res.message)) {
            location.reload()
        }
    })
})

$(document).on('click', '.click-to-view', function (e) {
    var base_url = window.location.origin;
    let id = $(this).data('id')

    location.replace(base_url +'/admin/PreviewData/'+id)
    console.log(id)
})

$('.addschoolyearform').submit(function (e) {
    e.preventDefault()
    const self = $(this)
    const data = new FormData(self[0])

    ajax(data, 'admin/addSchoolYear').then(res => {
        if (confirm(res.message) || !confirm(res.message)) {
            location.reload()
        }
    })


    console.log(data)
})

function resetStorage() {
    localStorage.setItem('cebucity_checkbox', 0)
    localStorage.setItem('bmp_checkbox', 0)
    localStorage.setItem('dole_checkbox', 0)
    localStorage.setItem('free_tuition_fee_checkbox', 0)
    localStorage.setItem('subsidized_checkbox', 0)
    localStorage.setItem('special_package_checkbox', 0)
}

$('.jhsform').submit(function (e) {
    e.preventDefault()
    var q1 = $('#q1_yes').is(':checked')
    var q2 = $('#q2_yes').is(':checked')
    var q3 = $('#q3_yes').is(':checked')
    var q4 = $('#q4_yes').is(':checked')
    var q5 = $('#q5_yes').is(':checked')
    var q6 = $('#q6_yes').is(':checked')
    var q7 = $('#q7_yes').is(':checked')
    const cebucityscholarcard = $('.cebucityscholarcard')
    const batangmaypangarapcard = $('.batangmaypangarapcard')
    const dolecard = $('.dolecard')
    const free_tuition_fee = $('.free_tuition_fee')
    const subsidized = $('.subsidized')
    const special_package = $('.special_package')



    if (q4) {
        $('#scholarsModalMsg').html('')
        $('#scholarsModalMsg').html('<i>We regret that you are not eligible for the scholarship that our school is currently giving.Thank you so much and have a good one!</i>')
    } else if (!q1 && !q2 && !q3 && !q4 && !q5 && !q6 && !q7) {
        special_package.show()
    } else {
        if (q1) {
            free_tuition_fee.show()
        }
        if (q6) {
            subsidized.show()
        }
        if (q7) {
            special_package.show()
        }
        if (q5) {
            if (q2 && q3) {
                dolecard.show()
                batangmaypangarapcard.show()
            } else if (q2) {
                dolecard.show()
            } else if (q3) {
                batangmaypangarapcard.show()
            }
        } else {
            $('#scholarsModalMsg').html('')
            $('#scholarsModalMsg').html('<i>No results!</i>')
        }
    }
    $('#scholarsModal').modal('toggle')
})

$('.collegeform').submit(function (e) {
    e.preventDefault()
    var q1 = $('#q1_yes_').is(':checked')
    var q2 = $('#q2_yes_').is(':checked')
    var q3 = $('#q3_yes_').is(':checked')
    var q4 = $('#q4_yes_').is(':checked')
    var q5 = $('#q5_yes_').is(':checked')
    var q6 = $('#q6_yes_').is(':checked')
    var q7 = $('#q7_yes_').is(':checked')
    var q8 = $('#q8_yes_').is(':checked')
    var q9 = $('#q9_yes_').is(':checked')
    const cebucityscholarcard = $('.cebucityscholarcard')
    const batangmaypangarapcard = $('.batangmaypangarapcard')
    const dolecard = $('.dolecard')
    const free_tuition_fee = $('.free_tuition_fee')
    const subsidized = $('.subsidized')
    const special_package = $('.special_package')

    if (q6) {
        $('#scholarsModalMsg').html('')
        $('#scholarsModalMsg').html('<i>We regret that you are not eligible for the scholarship that our school is currently giving.Thank you so much and have a good one!</i>')
    } else if (!q7) {
        $('#scholarsModalMsg').html('')
        $('#scholarsModalMsg').html('<i>No results!</i>')
    } else {
        if (q1) {
            free_tuition_fee.show()
        }
        if (q8) {
            subsidized.show()
        }
        if (q9) {
            special_package.show()
        }
        if (q2 && q4 && q5) {
            if (q3) {
                cebucityscholarcard.show()
            }
            batangmaypangarapcard.show()
            dolecard.show()
        } else if (q2) {
            cebucityscholarcard.show()
        } else if (q4) {
            dolecard.show()
        } else if (q5) {
            batangmaypangarapcard.show()
        }
    }

    $('#scholarsModal').modal('toggle')
})


$('.homechoicesform').submit(function (e) {
    e.preventDefault()
    const data = new FormData(this)
    const choice1 = $('.cebucityscholarcard')
    const choice2 = $('.batangmaypangarapcard')

    var q1 = $('#q1_yes').is(':checked')
    var q2 = $('#q2_yes').is(':checked')
    var q3 = $('#q3_yes').is(':checked')
    var q4 = $('#q4_yes').is(':checked')
    var q5 = $('#q5_yes').is(':checked')
    var q6 = $('#q6_yes').is(':checked')
    console.log(q1)

    if (q1 && q2 && q3 && q4 && q5 && q6) {
        choice1.show()
        choice2.show()
        console.log('all')
    } else if (q1 && q2) {
        if (q3 || q4 || q5 && !q6) {
            $('#scholarsModalMsg').html('')
            $('#scholarsModalMsg').html('Congratulations! You are Qualified to Avail This Scholarship.')
            choice1.show()
        }
    } else if (!q1 && !q2 && !q3 && !q4 && !q5 && q6) {
        $('#scholarsModalMsg').html('')
        $('#scholarsModalMsg').html('Congratulations! You are Qualified to Avail This Scholarship.')
        choice2.show()
    } else if (!q1 && !q2 && !q3 && !q4 && !q5 && !q6) {
        $('#scholarsModalMsg').html('')
        $('#scholarsModalMsg').html('<i>We regret that you are not eligible for the scholarship that our school is currently giving.Thank you so much and have a good one!</i>')
    }

    $('#choicesModal').hide()
    $('#scholarsModal').modal('toggle')
    console.log(data)
})

const ajax = (data, url) => {
    var base_url = window.location.origin;
    return $.ajax({
        url: `${base_url}/${url}`,
        type: "post",
        dataType: "json",
        data: data,
        async: true,
        cache: false,
        enctype: "multipart/form-data",
        processData: false,
        contentType: false,
        success: function (res) {
            return res;
        },
        error: function (err) {
            return err;
        },
    });
}




$('#q1_yes').change(function () {
    if ($(this).is(':checked')) {
        $('#q1_no').prop('checked', false)
    }
})
$('#q1_no').change(function () {
    if ($(this).is(':checked')) {
        $('#q1_yes').prop('checked', false)
    }
})

$('#q2_yes').change(function () {
    if ($(this).is(':checked')) {
        $('#q2_no').prop('checked', false)
    }
})
$('#q2_no').change(function () {
    if ($(this).is(':checked')) {
        $('#q2_yes').prop('checked', false)
    }
})

$('#q3_yes').change(function () {
    if ($(this).is(':checked')) {
        $('#q3_no').prop('checked', false)
    }
})
$('#q3_no').change(function () {
    if ($(this).is(':checked')) {
        $('#q3_yes').prop('checked', false)
    }
})

$('#q4_yes').change(function () {
    if ($(this).is(':checked')) {
        $('#q4_no').prop('checked', false)
    }
})
$('#q4_no').change(function () {
    if ($(this).is(':checked')) {
        $('#q4_yes').prop('checked', false)
    }
})

$('#q5_yes').change(function () {
    if ($(this).is(':checked')) {
        $('#q5_no').prop('checked', false)
    }
})
$('#q5_no').change(function () {
    if ($(this).is(':checked')) {
        $('#q5_yes').prop('checked', false)
    }
})

$('#q6_yes').change(function () {
    if ($(this).is(':checked')) {
        $('#q6_no').prop('checked', false)
    }
})
$('#q6_no').change(function () {
    if ($(this).is(':checked')) {
        $('#q6_yes').prop('checked', false)
    }
})
$('#q7_yes').change(function () {
    if ($(this).is(':checked')) {
        $('#q7_no').prop('checked', false)
    }
})
$('#q7_no').change(function () {
    if ($(this).is(':checked')) {
        $('#q7_yes').prop('checked', false)
    }
})


$('#q1_yes_').change(function () {
    if ($(this).is(':checked')) {
        $('#q1_no_').prop('checked', false)
    }
})
$('#q1_no_').change(function () {
    if ($(this).is(':checked')) {
        $('#q1_yes_').prop('checked', false)
    }
})

$('#q2_yes_').change(function () {
    if ($(this).is(':checked')) {
        $('#q2_no_').prop('checked', false)
    }
})
$('#q2_no_').change(function () {
    if ($(this).is(':checked')) {
        $('#q2_yes_').prop('checked', false)
    }
})

$('#q3_yes_').change(function () {
    if ($(this).is(':checked')) {
        $('#q3_no_').prop('checked', false)
    }
})
$('#q3_no_').change(function () {
    if ($(this).is(':checked')) {
        $('#q3_yes_').prop('checked', false)
    }
})

$('#q4_yes_').change(function () {
    if ($(this).is(':checked')) {
        $('#q4_no_').prop('checked', false)
    }
})
$('#q4_no_').change(function () {
    if ($(this).is(':checked')) {
        $('#q4_yes_').prop('checked', false)
    }
})

$('#q5_yes_').change(function () {
    if ($(this).is(':checked')) {
        $('#q5_no_').prop('checked', false)
    }
})
$('#q5_no_').change(function () {
    if ($(this).is(':checked')) {
        $('#q5_yes_').prop('checked', false)
    }
})

$('#q6_yes_').change(function () {
    if ($(this).is(':checked')) {
        $('#q6_no_').prop('checked', false)
    }
})
$('#q6_no_').change(function () {
    if ($(this).is(':checked')) {
        $('#q6_yes_').prop('checked', false)
    }
})

$('#q7_yes_').change(function () {
    if ($(this).is(':checked')) {
        $('#q7_no_').prop('checked', false)
    }
})
$('#q7_no_').change(function () {
    if ($(this).is(':checked')) {
        $('#q7_yes_').prop('checked', false)
    }
})
$('#q8_yes_').change(function () {
    if ($(this).is(':checked')) {
        $('#q8_no_').prop('checked', false)
    }
})
$('#q8_no_').change(function () {
    if ($(this).is(':checked')) {
        $('#q8_yes_').prop('checked', false)
    }
})
$('#q9_yes_').change(function () {
    if ($(this).is(':checked')) {
        $('#q9_no_').prop('checked', false)
    }
})
$('#q9_no_').change(function () {
    if ($(this).is(':checked')) {
        $('#q9_yes_').prop('checked', false)
    }
})