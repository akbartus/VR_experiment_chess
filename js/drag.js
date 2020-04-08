function drag() {
		var kingblack = document.querySelector('#kingblack');
        kingblack.addEventListener('dragstart', function(dragInfo) {
          kingblack.pause();
        });
        kingblack.addEventListener('dragend', function(dragInfo) {
          var x = dragInfo.detail.velocity.x;
          var y = dragInfo.detail.velocity.y;
          var z = dragInfo.detail.velocity.z;

          kingblack.play();
          kingblack.body.velocity.set(x, y, z);
          console.log('drag end', dragInfo.detail.velocity);
        });
		
		var kingwhite = document.querySelector('#kingwhite');
        kingwhite.addEventListener('dragstart', function(dragInfo) {
          kingwhite.pause();
        });
        kingwhite.addEventListener('dragend', function(dragInfo) {
          var x = dragInfo.detail.velocity.x;
          var y = dragInfo.detail.velocity.y;
          var z = dragInfo.detail.velocity.z;

          kingwhite.play();
          kingwhite.body.velocity.set(x, y, z);
          console.log('drag end', dragInfo.detail.velocity);
        });
		
		var soldierwhite1 = document.querySelector('#soldierwhite1');
        soldierwhite1.addEventListener('dragstart', function(dragInfo) {
          soldierwhite1.pause();
        });
        soldierwhite1.addEventListener('dragend', function(dragInfo) {
          var x = dragInfo.detail.velocity.x;
          var y = dragInfo.detail.velocity.y;
          var z = dragInfo.detail.velocity.z;

		  soldierwhite1.play();
          soldierwhite1.body.velocity.set(x, y, z);
          console.log('drag end', dragInfo.detail.velocity);
        });
		
		var soldierwhite2 = document.querySelector('#soldierwhite2');
        soldierwhite2.addEventListener('dragstart', function(dragInfo) {
          soldierwhite2.pause();
        });
        soldierwhite2.addEventListener('dragend', function(dragInfo) {
          var x = dragInfo.detail.velocity.x;
          var y = dragInfo.detail.velocity.y;
          var z = dragInfo.detail.velocity.z;

		  soldierwhite2.play();
          soldierwhite2.body.velocity.set(x, y, z);
          console.log('drag end', dragInfo.detail.velocity);
        });
		}
		