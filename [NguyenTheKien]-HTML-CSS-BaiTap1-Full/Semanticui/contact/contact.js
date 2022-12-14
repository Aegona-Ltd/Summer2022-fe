$(document)
.ready(function() {
  $('.ui.form')
	.form({
	  fields: {
		name: {
		  identifier  : 'name',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please enter your e-mail'
			},
			{
			  type   : 'length[6]',
			  prompt : 'Your UserName must be at least 6 characters'
			}
		  ]
		},
		email: {
            identifier  : 'email',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your e-mail'
              },
              {
                type   : 'email',
                prompt : 'Please enter a valid e-mail'
              }
            ]
        }
	  }
	})
  ;
})
;
